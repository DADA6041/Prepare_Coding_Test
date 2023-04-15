function solution(n) {
    if (n < 8) {
        return 1;
    } else if (n % 7 === 0 ){
        return parseInt(n / 7);
    } else {
        return parseInt(n / 7) +1;
    }
}