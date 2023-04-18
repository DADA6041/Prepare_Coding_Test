function solution(price, money, count) {
    let answer;
    let total = 0;
    for(let i = 1; i <= count; i++){
        total += i * price;
    }
    total  > money ? answer = total - money : answer = 0;
    return answer;
}