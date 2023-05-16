function solution(num_list, n) {
    let answer = num_list.filter((i) => i === n);
    return answer.length !== 0 ? 1 : 0;
}