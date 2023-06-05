function solution(number) {
    var answer = number.split("").reduce((a,b) => parseInt(a) + parseInt(b));
    return answer % 9;
}