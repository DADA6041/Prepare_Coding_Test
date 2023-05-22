function solution(strArr) {
    return strArr.map((i,idx) => idx % 2 === 0 ? i.toLowerCase() : i.toUpperCase());
}