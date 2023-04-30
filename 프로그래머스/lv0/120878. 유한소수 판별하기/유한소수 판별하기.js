function solution(a, b) {
    let k = 0;
    for (let i = 1; i <= b; i++){
        if(a % i === 0 && b % i === 0) {
            k = i;
        }
    }
    b = b / k;
    
    while(b % 2 === 0) b = b / 2;
    while(b % 5 === 0) b = b / 5;
    
    return b === 1 ? 1 : 2;
}