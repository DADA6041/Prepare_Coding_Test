function solution(n) {
    var answer = [];
    const tempNum = String(n).split("");
    tempNum.map(i => answer.unshift(Number(i)))
    return answer;
}