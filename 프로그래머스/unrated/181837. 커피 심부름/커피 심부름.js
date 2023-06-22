function solution(order) {
    let answer = 0;
    order.map(i => i.indexOf("latte") > 0 ? answer += 5000 : answer += 4500)
    return answer;
}