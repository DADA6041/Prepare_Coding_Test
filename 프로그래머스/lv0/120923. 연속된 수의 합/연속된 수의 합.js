function solution(num, total) {
    const min = Math.ceil(total / num) - Math.floor(num / 2);
    return Array(num).fill(0).map((_,i) => i + min);
}