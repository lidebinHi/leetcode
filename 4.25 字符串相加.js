// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

// 考的是超长位数字的加法 数字超长的时候直接转就会溢出 所以要一位一位的自己来加
const addStrings = (num1, num2) => {
    let res = ''
    let p1 = num1.length - 1
    let p2 = num2.length - 1
    let carry = 0;
    while (p1 >= 0 || p2 >= 0 || carry) {
       let r = 0
        if(p1 >= 0) {
            r =  1 * num1[p1] + r
        }
        if(p2 >= 0) {
            r = 1 * num2[p2] + r
        }
        r = r + carry
       if(r >= 10) {
           carry = 1;
           res = `${r % 10}${res}`
       } else  {
           carry = 0
           res = `${r}${res}`
       }
       p1--;
       p2--;
    }
    return res
};

console.log(addStrings('1', '9999'))