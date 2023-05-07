function solution(dots) {
    width = Math.max(...dots.map(i => i[0])) - Math.min(...dots.map(i => i[0]));
    height = Math.max(...dots.map(i => i[1])) - Math.min(...dots.map(i => i[1]));
    return width * height;
}