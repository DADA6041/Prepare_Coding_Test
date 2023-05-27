function solution(num_list) {
    let a = 0;
    let b = 0;
    num_list.map((i, idx) =>  idx % 2 === 0 ? a +=i : b += i);
    return a > b ? a : b;
}