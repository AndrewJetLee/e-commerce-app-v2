export const getDiscountPercentage = (previousPrice, currentPrice) => {
    return Math.floor((100 * (previousPrice - currentPrice)) / previousPrice);
};