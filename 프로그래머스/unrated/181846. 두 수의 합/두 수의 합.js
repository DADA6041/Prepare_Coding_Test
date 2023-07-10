function solution(a, b) {
    if(a > 2^53-1 || b > 2^53-1){
        return String(BigInt(a) + BigInt(b));
    }else {
        return String(parseInt(a) + parseInt(b));
    }
}