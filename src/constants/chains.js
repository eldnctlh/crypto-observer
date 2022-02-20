export default {
    250: {//fantom
        rpc: 'https://rpc.ftm.tools/',
        tokens: [
            {
                id: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',//usdc
                slug: 'usd-coin',
                title: 'usdc',
                decimals: 6
            },
            {
                id: '0x911da02c1232a3c3e1418b834a311921143b04d7',//vedao
                slug: 'vedao',
                title: 'veDAO',
                decimals: 18
            }
        ],
        title: 'Fantom'
    },
    43114: {//avalanche
        rpc: 'https://api.avax.network/ext/bc/C/rpc',
        tokens: [
            {
                id: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',//usdc
                title: 'USDC',
                slug: 'usd-coin',
                decimals: 6
            },
            {
                id: '0x6b8fb769d1957f2c29abc9d1beb95851cce775d8',//sfort
                slug: 'fortressdao',
                title: 'sFORT',
                decimals: 9
            },
            {
                id: '0xf6d46849db378ae01d93732585bec2c4480d1fd5',//fort
                slug: 'fortressdao',
                title: 'FORT',
                decimals: 9
            },
            {
                id: '0x136acd46c134e8269052c62a67042d6bdedde3c9',//memo
                slug: 'wonderland',
                title: 'MEMO',
                decimals: 9
            },
            {
                id: '0xb54f16fb19478766a268f172c9480f8da1a7c9c3',//time
                slug: 'wonderland',
                title: 'TIME',
                decimals: 9
            }
        ],
        title: 'Avalanche'
    },
    56: {//bsc
        rpc: 'https://bsc-dataseed.binance.org/',
        tokens: [
            {
                id: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',//usdc
                title: 'USDC',
                slug: 'usd-coin',
                decimals: 18
            },
            {
                id: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',//eth
                slug: 'ethereum',
                title: 'ETH',
                decimals: 18
            },
            {
                id: '0x41f831c60c7051cffa756ab5f9fee81a670ecde0',//blinu
                slug: 'baby-lambo-inu',
                title: 'BLINU',
                decimals: 18
            }
        ],
        title: 'Binance Smart Chain'
    }
}