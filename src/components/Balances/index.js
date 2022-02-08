import { useWeb3React } from '@web3-react/core'
import { Typography, Row, Col, Skeleton, Card, Divider } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import chains from '../../constants/chains'
import useGetBalances from "../../utils/hooks/getBalances";
import { formatDecimals, getTotalInUSD } from "../../utils/helpers/formatting";

const Balances = () => {
    const { active, chainId } = useWeb3React()
    const { balances } = useGetBalances()

    if (!active) {
        return null
    }

    const renderIcon = (changePercentage) => {
        if (changePercentage > 0) {
            return <CaretUpOutlined color="red" style={{ marginRight: '.5rem', color: '#77C66E' }} />
        } else {
            return <CaretDownOutlined style={{ marginRight: '.5rem', color: '#ea3c53' }} />
        }
    }

    const renderList = () => {
        return chains[chainId].tokens.map(token => {
            const matchedBalance = balances[token.id]
            if (matchedBalance) {
                const formattedAmount = formatDecimals(matchedBalance.balance, token.decimals)
                const price = matchedBalance.price
                return (
                    <Row gutter={[16, 16]} key={token.id} style={{ marginTop: '1rem' }}>
                        <Col span={3}><Typography.Title level={4} strong>{token.title}:</Typography.Title></Col>
                        <Col span={3}><Typography.Title level={4} strong>{formattedAmount}</Typography.Title></Col>
                        <Col span={3}><Typography.Title level={4} strong>{price.price.toFixed(2)}$</Typography.Title></Col>
                        <Col span={3}><Typography.Title level={4} strong>{getTotalInUSD(formattedAmount, price.price)}$</Typography.Title></Col>
                        <Col span={2}><Typography.Text>{renderIcon(price.percent_change_1h)}{price.percent_change_1h}%</Typography.Text></Col>
                        <Col span={2}><Typography.Text>{renderIcon(price.percent_change_24h)}{price.percent_change_24h}%</Typography.Text></Col>
                        <Col span={2}><Typography.Text>{renderIcon(price.percent_change_7d)}{price.percent_change_7d}%</Typography.Text></Col>
                        <Col span={2}><Typography.Text>{renderIcon(price.percent_change_30d)}{price.percent_change_30d}%</Typography.Text></Col>
                        <Col span={2}><Typography.Text>{renderIcon(price.percent_change_60d)}{price.percent_change_60d}%</Typography.Text></Col>
                        <Col span={2}><Typography.Text>{renderIcon(price.percent_change_90d)}{price.percent_change_90d}%</Typography.Text></Col>
                    </Row>
                )
            } else {
                return <Skeleton key={token.id} />
            }
        })
    }

    return (
        <Card className="card-antd-restyled" style={{ marginTop: '2rem' }}>
            <Row gutter={[16, 16]}>
                <Col span={3}><Typography.Title level={4} strong>Title</Typography.Title></Col>
                <Col span={3}><Typography.Title level={4} strong>Balance</Typography.Title></Col>
                <Col span={3}><Typography.Title level={4} strong>Token price</Typography.Title></Col>
                <Col span={3}><Typography.Title level={4} strong>Total price</Typography.Title></Col>
                <Col span={2}><Typography.Title level={4} strong>1 hour</Typography.Title></Col>
                <Col span={2}><Typography.Title level={4} strong>24 hours</Typography.Title></Col>
                <Col span={2}><Typography.Title level={4} strong>7 days</Typography.Title></Col>
                <Col span={2}><Typography.Title level={4} strong>30 days</Typography.Title></Col>
                <Col span={2}><Typography.Title level={4} strong>60 days</Typography.Title></Col>
                <Col span={2}><Typography.Title level={4} strong>90 days</Typography.Title></Col>
            </Row>
            <Divider />
            {renderList()}
        </Card>
    )
}

export default Balances
