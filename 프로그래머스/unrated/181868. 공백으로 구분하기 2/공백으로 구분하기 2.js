function solution(my_string) {
    var answer = [];
     my_string.split(" ").map(i => i !== "" ? answer.push(i): i);
    return answer;
}