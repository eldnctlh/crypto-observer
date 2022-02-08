import { InjectedConnector } from '@web3-react/injected-connector'
import chains from '../../constants/chains'

export const injected = new InjectedConnector({
    supportedChainIds: Object.keys(chains).map(e => +e)
})