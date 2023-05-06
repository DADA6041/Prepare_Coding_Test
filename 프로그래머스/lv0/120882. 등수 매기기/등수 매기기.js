function solution(score) {
    let avg = score.map(i => (i[0] + i[1]) /2);
    let sorted = avg.map(i => i).sort((a, b)=> b - a);
    return avg.map(i => sorted.indexOf(i) + 1);
}