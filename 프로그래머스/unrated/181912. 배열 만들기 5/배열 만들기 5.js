function solution(intStrs, k, s, l) {
    return intStrs.map(i => parseInt(i.substr(s,l))).filter(i => i > k);
}