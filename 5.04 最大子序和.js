// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组 是数组中的一个连续部分。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 找以nums[i]为结尾的子序列可以找到所有连续子序列
// 设 dp[i]存储的死是以nums[i]为结尾的子序列中最大的和 那么 dp[i + 1] = max[dp[i + 1] + nums[i + 1], dp[i + 1]]
// 全部循环完成dp中存储的是以nums[i]为结尾的子序列的最大和 但是不是所有子序列的最大和 所以还要再次比较找到最大值
const maxSubArray = (nums) => {
    if(nums.length ===1 ) return nums[0]
    const dp = [nums[0]]
    let max = 0
    for(let i = 1; i < nums.length; i++) {
        dp[i] = dp[i - 1] + nums[i] > nums[i] ? dp[i - 1] + nums[i] : nums[i]
    }

    for (let i = 0; i < dp.length; i++) {
        if(dp[i] <= max) continue
        max = dp[i]
    }
    return max
};

