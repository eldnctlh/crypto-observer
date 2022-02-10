import React from 'react'
import Web3 from 'web3'
import moment from 'moment'
import { useWeb3React } from '@web3-react/core'
import chains from '../../constants/chains'
import { injected } from '../../components/wallet/connectors'

let interval

const useGetBalances = () => {
    const { account, active, chainId, deactivate, activate } = useWeb3React()
    const [balances, setBalances] = React.useState({})
    const [lastUpdate, setLastUpdate] = React.useState(null)
    const [updatedAt, setUpdatedAt] = React.useState(null)

    React.useEffect(() => {
        if(window.ethereum) {
            window.ethereum.on('chainChanged', () => {
                reactivate()
            })
            window.ethereum.on('accountsChanged', () => {
                reactivate()

            })
        }
        return () => clearInterval(interval)
    }, [])

    React.useEffect(() => {
        clearInterval(interval)
        interval = setInterval(() => {
            if (lastUpdate) {
                setUpdatedAt(lastUpdate.fromNow())
            }
        }, 10000)

    }, [lastUpdate])

    const reactivate = async() => {
        await deactivate()
        await activate(injected)
        updateBalances()
    }

    React.useEffect(() => {
        updateBalances()
    }, [active])

    const updateBalances = async() => {
        if (active) {
            const chain = chains[chainId]
            const rpcURL = chain.rpc
            const web3 = new Web3(rpcURL)
            const promises = []
            chain.tokens.forEach((token) => {
                let tokenAddress = token.id;
                let walletAddress = account;

                let minABI = [
                    {
                        "constant": true,
                        "inputs": [{"name": "_owner", "type": "address"}],
                        "name": "balanceOf",
                        "outputs": [{"name": "balance", "type": "uint256"}],
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [],
                        "name": "decimals",
                        "outputs": [{"name": "", "type": "uint8"}],
                        "type": "function"
                    }
                ];
                let contract = new web3.eth.Contract(minABI, tokenAddress);

                const getBalance = async() => {
                    return await contract.methods.balanceOf(walletAddress).call();
                }
                promises.push(getBalance())
            })

            const getPrices = async() => {
                const apiKey = process.env.REACT_APP_COIN_MARKETCAP_API_KEY;
                const params = {
                    'method'  : 'GET',
                    'headers' : {'X-CMC_PRO_API_KEY': apiKey},
                    'muteHttpExceptions': true
                };

                const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=${chain.tokens.reduce((acc, val, i) => acc + (i ? ',' : '') + val.slug, '')}`;
                const res = await fetch(url, params);
                return await res.json()
            }

            const res = await Promise.all(promises)
            const prices = await getPrices()

            setBalances(res.reduce((acc, balance, index) => {
                const coinmarketcapID = Object.keys(prices.data).find(e => prices.data[e].slug === chain.tokens[index].slug)
                const price = prices.data[coinmarketcapID]
                return {
                    ...acc,
                    [chain.tokens[index].id]: {
                        balance,
                        price: price.quote.USD
                    }
                }
            }, {}))
            setLastUpdate(moment())
        }
    }

    return { balances, updatedAt }
}

export default useGetBalances
