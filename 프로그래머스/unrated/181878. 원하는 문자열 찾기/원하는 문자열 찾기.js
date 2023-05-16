function solution(myString, pat) {
    var answer = myString.toLowerCase().indexOf(pat.toLowerCase());
    return answer !== -1 ? 1 : 0;
}