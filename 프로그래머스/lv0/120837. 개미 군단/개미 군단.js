function solution(hp) {
    const bigAnt = Math.floor(hp / 5);
    const middleAnt = Math.floor((hp - 5 * bigAnt) / 3);
    const smallAnt = hp - (5 * bigAnt) - (3 * middleAnt);
    return bigAnt + middleAnt + smallAnt;
}