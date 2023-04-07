function solution(s){
    var answer = true;
    let pNum = s.toLowerCase().split("p").length - 1;
    let yNum = s.toLowerCase().split("y").length - 1;
    pNum === yNum ? answer = true : answer = false;
    return answer;
}