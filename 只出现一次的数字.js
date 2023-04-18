/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    let result;
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], true)
        } else {
            map.set(nums[i], false)
        }
    }
    map.forEach((value, key) => !value ? result = key : null);
    return result
};
console.log(singleNumber([2, 2, 1]));