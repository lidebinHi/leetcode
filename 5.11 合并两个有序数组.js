// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
// 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。
// 为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

// 双指针
const merge = (nums1, m, nums2, n) => {
    if(!m && !n) return nums1
    let i1 = 0
        i2 = 0
    let newArr = []
    while(i1 < m && i2 < n) {
        if(nums1[i1] < nums2[i2]) {
            newArr.push(nums1[i1])
            i1 ++
        }else if(nums1[i1] > nums2[i2]) {
            newArr.push(nums2[i2])
            i2 ++
        }else{
            newArr.push(nums1[i1])
            newArr.push(nums2[i2])
            i1 ++
            i2 ++
        }
    }
    if(i1 < m) {
        newArr = newArr.concat(nums1.slice(i1, m))
    }
    if(i2 < n) {
        newArr = newArr.concat(nums2.slice(i2))
    }
    nums1.forEach((element, index) => {
        if(element !== newArr[index]) {
            nums1[index] = newArr[index]
        }
    });    
};

// 从后往前 最佳方案 简单

const merge2 = (nums1, m, nums2, n) => {
    if(!m && !n) return nums1
    let i = m - 1
        j = n - 1
    let last = m + n - 1
    while(i >= 0 && j >= 0) {
        if(nums1[i] > nums2[j]) {
            nums1[last] = nums1[i]
            i --
            last --
        } else if(nums2[j] > nums1[i]) {
            nums1[last] = nums2[j]
            j --
            last --
        } else {
            nums1[last] = nums1[i]
            last--
            i--
            nums1[last] = nums2[j]
            last--
            j--
        }
    }

    if(j >= 0) {
        for(let index = 0; index <= j; index ++ ) {
            nums1[index] = nums2[index]
        }
    }
};