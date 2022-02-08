import { useWeb3React } from '@web3-react/core'
import {Button, Typography} from 'antd';
import { injected } from '../../components/wallet/connectors'
import Balances from '../../components/Balances'

const Home = () => {
    const { account, active, activate, chainId } = useWeb3React()

    const connect = async() => {
        try {
            await activate(injected)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <Button className="antd-btn-restyled" onClick={connect}>Connect to MetaMask</Button>
            <Typography.Text style={{ color: 'white', marginLeft: '1rem' }}>
                {
                    active ?
                        <>Connected with <b>{account}</b></>
                        : <>Not connected</>
                }
            </Typography.Text>
            {
                chainId ? <Typography.Title style={{ color: 'white' }} level={4}>Chain Id: {chainId}</Typography.Title> : null
            }
            <Balances />
        </div>
    );
}

export default Home;
