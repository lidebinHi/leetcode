// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

// 同时维护一个最低价格和一个最大利润 不在计算每个价格可以获得最大利润而是计算最低价格可以获得的最大利润
const maxProfit = (prices) =>  {
    let amount = 0
    if(prices.length <= 1) return amount
    let minPrice = prices[0]
    for(let i = 1; i<prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i]
        } else if(prices[i] - minPrice > amount) {
            amount = prices[i] - minPrice
        } 
    }
    return amount
};


/**
 * @param {number[]} prices
 * @return {number}
 */

// 暴力解法
const maxProfit2 = (prices) =>  {
    let amount = 0
    const pricesHash = new Map()
    if(prices.length <= 1) return amount
    for(let i = 0; i<prices.length; i++) {
        if(pricesHash.has(prices[i])) continue
        for(let j = i + 1; j<prices.length; j++) {
            const newAmount = prices[j] - prices[i]
            if( newAmount > amount) {
                amount = newAmount
            }
            pricesHash.set(prices[i], amount)
        }
    }
    return amount
};
