// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组 是数组中的一个连续部分。

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    if(nums.length ===1 ) return nums[0]
    const dp = [nums[0]]
    for(let i = 1; i < nums.length; i++) {
        let maxI = dp[i - 1]
        let sum = 0
        for(let j = i; j >= 0; j--)  {
            sum = sum + nums[j]
            if(sum > maxI) {
                maxI = sum
            }
        }
        dp[i] = maxI
    }
    return dp[dp.length - 1]
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
