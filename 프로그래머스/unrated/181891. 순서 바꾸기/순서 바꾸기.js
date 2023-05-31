function solution(num_list, n) {
    let a = num_list.splice(0, n);
    return num_list.concat(a);
}