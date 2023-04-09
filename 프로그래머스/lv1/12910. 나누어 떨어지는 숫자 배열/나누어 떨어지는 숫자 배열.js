function solution(arr, divisor) {
    let answer = arr.filter(i => i % divisor === 0).sort((a , b) => a - b);
    if(answer.length === 0) {
        answer.push(-1);
    };
    return answer;
}