function solution(my_str, n) {
    let arr = [...my_str]
    let answer = [];
    for (let i = 0; i < my_str.length / n; i++){
        answer.push(arr.splice(0, n).join(''))
    }
    return answer;
}
