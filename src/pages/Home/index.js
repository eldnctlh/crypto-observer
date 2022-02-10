import { useWeb3React } from '@web3-react/core'
import { Button, Typography, Row, Col } from 'antd';
import { injected } from '../../components/wallet/connectors'
import Balances from '../../components/Balances'
import ChainsTabs from '../../components/ChainsTabs'

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
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Button className="antd-btn-restyled" onClick={connect}>Connect to MetaMask</Button>
                    <Typography.Text style={{ color: 'white', marginLeft: '1rem' }}>
                        {
                            active ?
                                <>Connected with <b>{account}</b></>
                                : <>Not connected</>
                        }
                    </Typography.Text>
                </Col>
                {
                    chainId ? (
                        <Col span={12}>
                            <ChainsTabs />
                        </Col>
                    ) : null
                }
            </Row>
            {
                chainId ? <Typography.Title style={{ color: 'white', marginTop: '1rem', marginBottom: '1rem' }} level={4}>Chain Id: {chainId}</Typography.Title> : null
            }
            <Balances />
        </div>
    );
}

export default Home;
