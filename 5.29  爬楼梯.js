// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
//每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 能知道 要想爬到第n个台阶 就可以先爬到第n-1个台阶 再向上爬一个 或者先爬到n-2个台阶 再向上爬两个
// 那么假设爬到第n-1台阶和n-2台阶的方法为f(n-1)和f(n-2) 那么爬上n台阶的方法就应该是f(n-1) + f(n-2)

const climbStairs = (n) => {
    if(n <= 1) return n
    const stairsMapping = {
        1: 1,
        2: 2
    }
    for(let i=3 ; i<=n; i++) {
        stairsMapping[i] = stairsMapping[i-1] + stairsMapping[i-2]
    }
    return stairsMapping[n]

};