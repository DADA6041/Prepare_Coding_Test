function solution(array) {
    const arrSort = array.sort((a, b) => a - b);
    return arrSort[Math.floor(arrSort.length / 2)];
}