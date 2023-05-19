function solution(num_list) {
    let odd = num_list.filter((i) => i % 2 === 0).join("");
    let even = num_list.filter((i) => i % 2 !== 0).join("");
    return Number(odd) + Number(even);
}