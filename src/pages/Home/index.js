import { useWeb3React } from '@web3-react/core'
import { Button, Typography, Row, Col } from 'antd';
import { injected } from '../../components/wallet/connectors'
import Balances from '../../components/Balances'
import ChainsTabs from '../../components/ChainsTabs'
import { truncateEthAddress } from '../../utils/helpers/formatting'

const Home = () => {
    const { account, active, activate, chainId, deactivate } = useWeb3React()

    const connect = async() => {
        if (active) {
            deactivate()
        } else {
            try {
                await activate(injected)
            } catch (e) {
                console.log(e)
            }
        }
    }

    return (
        <div className="container">
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Button className="antd-btn-restyled" onClick={connect}>
                        {
                            active ? 'Deactivate' : 'Connect to MetaMask'
                        }
                    </Button>
                    <Typography.Text style={{ color: 'white', marginLeft: '1rem' }}>
                        {
                            active ?
                                <>Connected with <b>{truncateEthAddress(account)}</b></>
                                : <>Not connected</>
                        }
                    </Typography.Text>
                </Col>
                {
                    chainId ? (
                        <Col span={16}>
                            <ChainsTabs />
                        </Col>
                    ) : null
                }
            </Row>
            <Balances />
        </div>
    );
}

export default Home;
