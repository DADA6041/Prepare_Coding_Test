function solution(a, b, c, d) {
    const dices = [a, b, c, d]
    const numFre = dices.reduce((acc, cur) => {
        acc[cur] = acc[cur] ?? 0
        acc[cur]++
        return acc
    }, {})
    
    const valInfo = Object.values(numFre)
    const keyInfo = Object.keys(numFre)
    // return valInfo
    const countVal = Math.max(...valInfo)
    switch(countVal) {
        case 4:
            return a*1111
        case 3: {
            const threeKey  = keyInfo.find((a) => numFre[a] === 3)
            const oneKey = keyInfo.find((a) => numFre[a] === 1)
            console.log(threeKey, oneKey)
            return (10 * Number(threeKey) + Number(oneKey))**2
        }
        case 2: {
            if(keyInfo.length === 2) {
                if(a === b) return (a+c) * Math.abs(a-c)
                return (a+b) * Math.abs(a-b)
            } else {
                return  keyInfo.reduce((acc, cur) => numFre[cur] === 1 ? acc*cur : acc, 1)
            }
        }   
        default: {
            return Math.min(a,b,c,d)
        }
    }
    
    return numFre;
}
