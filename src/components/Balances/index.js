import { useWeb3React } from '@web3-react/core'
import chains from '../../constants/chains'
import useGetBalances from "../../utils/hooks/getBalances";
import { formatDecimals, getTotalInUSD } from "../../utils/helpers/formatting";

const Balances = () => {
    const { active, chainId } = useWeb3React()
    const { balances } = useGetBalances()
    if (!active) {
        return null
    }

    const renderList = () => {
        return chains[chainId].tokens.map(token => {
            const matchedBalance = balances[token.id]
            if (matchedBalance) {
                const formattedAmount = formatDecimals(matchedBalance.balance, token.decimals)
                const price = matchedBalance.price.price
                console.log(matchedBalance.price)
                return (
                    <div key={token.id}>
                        {token.title}: {formattedAmount} * {price}$ = {getTotalInUSD(formattedAmount, price)}
                    </div>
                )
            }
        })
    }

    return (
        <div>
            Chain Id: {chainId}
            {renderList()}
        </div>
    )
}

export default Balances
