export const switchNetwork = async (key) => {
    if (window.ethereum) {
        try {
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: `0x${(+key).toString(16)}` }],
            });
        } catch (error) {
            console.log(error);
        }
    }
};