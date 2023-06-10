function solution(myString, pat) {
    let temp = myString.lastIndexOf(pat);
    return myString.slice(0, temp + pat.length);
}