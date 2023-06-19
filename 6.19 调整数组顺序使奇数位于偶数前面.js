// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const exchange = (nums) => {
    if(nums.length <= 1) return nums
    let i = 0, 
        j = nums.length - 1 
    while(i < j) {
        if(nums[i] % 2 !== 0) {
            i ++
            continue
        } else {
            if(nums[j] % 2 === 0) {
                j--
                continue
            } else {
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
        i ++
        j --
    }
    return nums
};