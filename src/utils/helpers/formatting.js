export const formatDecimals = (value, decimals) => {
    return (value / Math.pow(10, decimals)).toFixed(2)
}

export const getTotalInUSD = (amount, price) => {
    return (amount * price).toFixed(2)
}