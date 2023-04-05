export const formatDecimals = (value, decimals) => {
    return (value / Math.pow(10, decimals)).toFixed(2)
}

export const getTotalInUSD = (amount, price) => {
    return (amount * price).toFixed(2)
}

const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

export const truncateEthAddress = (address) => {
    const match = address.match(truncateRegex);
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
};
