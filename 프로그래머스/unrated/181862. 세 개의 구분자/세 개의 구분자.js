function solution(myStr) {
    let result = myStr.split(/[a|b|c]/g).filter(i => i);
    return result.length ? result : ["EMPTY"];
}