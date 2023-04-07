function solution(x, n) {
    var answer = [];
    for (let i = 0; answer.length < n; i++){
        answer.push(i * x + x)
    }
    return answer;
}