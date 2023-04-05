import { useWeb3React } from '@web3-react/core'
import { Typography, Row, Col, Skeleton, Card, Divider, Button } from 'antd';
import { CaretUpOutlined, CaretDownOutlined, ReloadOutlined } from '@ant-design/icons';
import chains from '../../constants/chains'
import useGetBalances from "../../utils/hooks/getBalances";
import { formatDecimals, getTotalInUSD } from "../../utils/helpers/formatting";

const Balances = () => {
    const { active, chainId } = useWeb3React()
    const { balances, updatedAt, updateBalances, isLoading } = useGetBalances()

    if (!active) {
        return null
    }

    const renderIcon = (changePercentage) => {
        if (changePercentage > 0) {
            return <CaretUpOutlined style={{ marginRight: '.2rem', color: '#77C66E' }} />
        } else {
            return <CaretDownOutlined style={{ marginRight: '.2rem', color: '#ea3c53' }} />
        }
    }

    const getProfit = (initial, current) => `${(100 * Math.abs( (initial - current) / ( (initial+current)/2 ) )).toFixed(2)}%`

    const renderList = () => {
        return chains[chainId].tokens.map(token => {
            const matchedBalance = balances[token.id]

            if (matchedBalance) {
                const formattedAmount = formatDecimals(matchedBalance.balance, token.decimals)
                const price = matchedBalance.price
                const priceNumber = token.bdc ? matchedBalance.price.price * 1000000 : matchedBalance.price.price
                return (
                    <Row gutter={[16, 16]} key={token.id} style={{ marginTop: '1rem' }}>
                        <Col span={2}><Typography.Text strong>{token.title}:</Typography.Text></Col>
                        <Col span={2}><Typography.Text strong>{formattedAmount}</Typography.Text></Col>
                        <Col span={2}><Typography.Text strong>{token.boughtAtPrice ? `${token.boughtAtPrice}$` : ''}</Typography.Text></Col>
                        <Col span={2}><Typography.Text strong>{priceNumber.toFixed(4)}$</Typography.Text></Col>
                        <Col span={2}><Typography.Text strong>{token.boughtAtPrice ? getProfit(token.boughtAtPrice, priceNumber) : null}</Typography.Text></Col>
                        <Col span={2}><Typography.Text strong>{getTotalInUSD(formattedAmount, priceNumber)}$</Typography.Text></Col>
                        <Col span={2}><Typography.Text>{renderIcon(price.percent_change_24h)}{price.percent_change_24h.toFixed(2)}%</Typography.Text></Col>
                        <Col span={2}><Typography.Text>{renderIcon(price.percent_change_7d)}{price.percent_change_7d.toFixed(2)}%</Typography.Text></Col>
                        <Col span={2}><Typography.Text>{renderIcon(price.percent_change_30d)}{price.percent_change_30d.toFixed(2)}%</Typography.Text></Col>
                        <Col span={2}><Typography.Text>{renderIcon(price.percent_change_60d)}{price.percent_change_60d.toFixed(2)}%</Typography.Text></Col>
                        <Col span={2}><Typography.Text>{renderIcon(price.percent_change_90d)}{price.percent_change_90d.toFixed(2)}%</Typography.Text></Col>
                    </Row>
                )
            } else {
                return <Skeleton title={false} key={token.id} />
            }
        })
    }

    return (
        <>
            {
                updatedAt ? (
                    <div className="flex-aligned" style={{ marginTop: '2rem' }}>
                        <Typography.Title style={{ color: 'white', marginRight: '1rem' }} level={5}>Last update: {updatedAt}</Typography.Title>
                        <Button
                            className="antd-btn-restyled"
                            onClick={updateBalances}
                            disabled={isLoading}
                        >
                            <ReloadOutlined style={{ color: '#fff' }} />
                            Update
                        </Button>
                    </div>
                ) : null
            }
            <Card className="card-antd-restyled" style={{ marginTop: '2rem' }}>
                <Row gutter={[16, 16]}>
                    <Col span={2}><Typography.Text strong>Title</Typography.Text></Col>
                    <Col span={2}><Typography.Text strong>Balance</Typography.Text></Col>
                    <Col span={2}><Typography.Text strong>Bought at</Typography.Text></Col>
                    <Col span={2}><Typography.Text strong>Token price</Typography.Text></Col>
                    <Col span={2}><Typography.Text strong>Profit %</Typography.Text></Col>
                    <Col span={2}><Typography.Text strong>Total price</Typography.Text></Col>
                    <Col span={2}><Typography.Text strong>24 h</Typography.Text></Col>
                    <Col span={2}><Typography.Text strong>7 d</Typography.Text></Col>
                    <Col span={2}><Typography.Text strong>30 d</Typography.Text></Col>
                    <Col span={2}><Typography.Text strong>60 d</Typography.Text></Col>
                    <Col span={2}><Typography.Text strong>90 d</Typography.Text></Col>
                </Row>
                <Divider />
                {renderList()}
            </Card>
        </>
    )
}

export default Balances
