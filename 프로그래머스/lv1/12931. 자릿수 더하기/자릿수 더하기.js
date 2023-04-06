function solution(n){
    let tempN = String(n).split("")
    let answer = tempN.reduce((acc, cur) => {
        return Number(acc) + Number(cur);
    }, 0);
    return answer;
}