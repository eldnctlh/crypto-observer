export default {
    1: {//ethereum
        rpc: 'https://rpc.ankr.com/eth',
        tokens: [
            {
                id: '0xD533a949740bb3306d119CC777fa900bA034cd52',//usdc
                slug: 'curve-dao-token',
                title: 'Curve',
                boughtAtPrice: 1.13,
                decimals: 18
            },
        ],
        title: 'Ethereum'
    },
    10: {//optimism
        rpc: 'https://mainnet.optimism.io',
        tokens: [
            {
                id: '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05',//usdc
                slug: 'velodrome-finance',
                title: 'Velo',
                boughtAtPrice: 0.18,
                decimals: 18
            },
        ],
        title: 'Optimism'
    },
    250: {//fantom
        rpc: 'https://rpc.ftm.tools/',
        tokens: [
            {
                id: '0x841fad6eae12c286d1fd18d1d525dffa75c7effe',//boo
                slug: 'spookyswap',
                title: 'BOO',
                boughtAtPrice: 1.58,
                decimals: 18
            }
        ],
        title: 'Fantom'
    },
    56: {//bsc
        rpc: 'https://bsc-dataseed.binance.org/',
        tokens: [
            {
                id: '0xc748673057861a797275cd8a068abb95a902e8de',//bdc
                slug: 'baby-doge-coin',
                title: 'Baby Doge Coin',
                boughtAtPrice: 0.002506,
                decimals: 12,
                bdc: true
            },
            {
                id: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',//pancake
                slug: 'pancakeswap',
                title: 'Pancake',
                boughtAtPrice: 3.78,
                decimals: 18
            }
        ],
        title: 'Binance Smart Chain'
    }
}