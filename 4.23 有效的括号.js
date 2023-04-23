// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
const isValid = (s) => {
    const stack = []
    const left = ['(', '{', '}']
    for (let i = 0; i < s.length; i++) {
        const item = s[i]
        if(left.includes(item)){
            stack.unshift(item)
        } else if((stack[0] === '[' && item === ']') || (stack[0] === '{' && item === '}') || (stack[0] === '(' && item === ')')){
            stack.shift()
        } else {
            return false
        }
    }
    if(stack.length){
        return false
    }
    return true
};