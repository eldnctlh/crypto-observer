import './App.css';
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import Home from './pages/Home'

const getLibrary = (provider) => {
  return new Web3(provider)
}

const App = () => {
  return (
    <Web3ReactProvider
        getLibrary={getLibrary}
    >
      <Home />
    </Web3ReactProvider>
  );
}

export default App;
