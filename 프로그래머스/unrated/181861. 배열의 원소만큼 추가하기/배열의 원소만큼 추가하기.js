function solution(arr) {
    let answer = [];
    for(i of arr){
        for(let k = 1; k <= i; k++){
            answer.push(i);
        }
    }
    return answer;
}