// 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
// 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

const mySqrt = (x) => {
    if(x <= 1) return x
    let left = 1
        right = x
    while (right > left + 1) {
        const mid = Math.ceil((left + right) / 2 )
        if(mid * mid === x) {
            return mid
        }

        if(mid * mid > x) {
            right = mid
        }

        if(mid * mid < x) {
            left = mid
        }
    }
    return left
};

console.log(mySqrt(101))