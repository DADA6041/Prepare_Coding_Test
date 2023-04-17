function solution(num_list) {
    var answer = [];
    num_list.forEach(i => {
        answer.unshift(i);
    })
    return answer;
}