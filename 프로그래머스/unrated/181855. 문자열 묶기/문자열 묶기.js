function solution(strArr) {
    const dict={}
    strArr.forEach(item => {
        const len = item.length
        dict[len] = dict[len] ?? []
        dict[len].push(item)
    })
    const values = Object.values(dict).map(a => a.length)
    return Math.max(...values)
}