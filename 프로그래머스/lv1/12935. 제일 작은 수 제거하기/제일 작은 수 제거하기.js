function solution(arr) {
    let minNum = [...arr].sort((a, b) => a - b)[0];
    let answer = [];
    if(arr.length === 1){
        answer.push(-1);
    } else {
        arr.splice(arr.indexOf(minNum), 1);
        answer= arr;
    }
    return answer;
}