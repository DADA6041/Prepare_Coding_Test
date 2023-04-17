function solution(sides) {
    let total = sides.reduce((prevVal, curval) => prevVal + curval);
    const max = Math.max(...sides)
    if (total - max > max){
        return 1;
    }
    return 2;
}