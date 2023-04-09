function solution(x) {
    let sum = String(x).split("").map(i => parseInt(i)).reduce((acc, cur) => acc + cur, 0)
    return x % sum === 0 ? true : false;
}