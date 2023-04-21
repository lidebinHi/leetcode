// 给定一个整数数组 nums 和一个整数目标值 target，
// 请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 遍历数组过程判断obj/map是否存在相加为target的值
// 有就返回下标 没有就存入obj obj的结构是key是数组的项 value是数组的下标
const twoSum = (nums, target) => {
    const sumObj = {}
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const rest = sumObj[target - num]
        if( rest || rest === 0) {
            return [i, rest]
        } else {
            sumObj[num] = i
        }
    }
};