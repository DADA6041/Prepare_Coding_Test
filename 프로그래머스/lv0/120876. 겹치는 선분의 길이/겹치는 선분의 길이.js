function solution(lines){
    let line = Array(201).fill(0)
    for (let [i, j] of lines){
        for(;i < j; i++){
            line[100 + i]++
        }
    }
    return line.filter(v => v >= 2).length
}