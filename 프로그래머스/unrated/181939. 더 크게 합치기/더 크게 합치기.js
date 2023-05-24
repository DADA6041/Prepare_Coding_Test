function solution(a, b) {
    let realA = String(a);
    let realB = String(b);
    return parseInt(realA + realB) >= parseInt(realB + realA) ? parseInt(realA + realB) : parseInt(realB + realA);
}