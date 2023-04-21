function solution(n, m) {
    let answer = [];
    let num = n > m ? n : m;
    
    let max = 0;
    let min = 0;
    
    for(let i = 0; i <= num; i++){
        if(n % i === 0 && m % i === 0) {
            max = i;
        }
    }
    
    min = n * m / max;
    
    answer = [max, min];
    return answer;
}