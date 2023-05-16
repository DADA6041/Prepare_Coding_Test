function solution(num_list) {
    let answer = num_list.filter((i) => i < 0);
    return num_list.indexOf(answer[0]);
}