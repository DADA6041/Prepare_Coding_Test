function solution(arr, n) {
    return arr.length % 2 === 0 ? arr.map((i,idx) => idx % 2=== 0 ? i : i + n) : arr.map((i,idx) => idx % 2 !== 0 ? i : i + n);
}