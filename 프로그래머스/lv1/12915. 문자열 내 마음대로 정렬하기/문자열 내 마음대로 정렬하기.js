function solution(strings, n) {
    return strings.sort((i1, i2) => i1[n] === i2[n] ? i1.localeCompare(i2) : i1[n].localeCompare(i2[n]));
}