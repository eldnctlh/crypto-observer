import { useWeb3React } from '@web3-react/core'
import { injected } from '../../components/wallet/connectors'
import Balances from '../../components/Balances'

const Home = () => {
    const { account, active, activate } = useWeb3React()

    const connect = async() => {
        try {
            await activate(injected)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <button onClick={connect}>Connect to MetaMask</button>
            {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
            <Balances />
        </div>
    );
}

export default Home;
