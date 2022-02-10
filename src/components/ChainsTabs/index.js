import { Button } from 'antd';
import chains from '../../constants/chains'
import { switchNetwork } from '../../utils/helpers/wallet'
import {useWeb3React} from "@web3-react/core";

const ChainsTabs = () => {
    const { chainId } = useWeb3React()
    return (
        <div>
            {
                Object.keys(chains).map(key => (
                    <Button
                        className="antd-btn-restyled"
                        key={key}
                        onClick={() => switchNetwork(key)}
                        style={{ marginLeft: '1rem' }}
                        disabled={chainId === +key}
                    >
                        Change to {chains[key].title}
                    </Button>
                ))
            }
        </div>
    );
}

export default ChainsTabs;
