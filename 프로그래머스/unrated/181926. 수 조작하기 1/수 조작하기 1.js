function solution(n, control) {
    var answer = n;
    control.split("").map((i) => {
        if(i === "w"){
          answer += 1
        } else if(i === "s"){
          answer -= 1
        } else if(i === "d"){
          answer += 10
        } else if(i === "a"){
          answer -= 10
        }
    })
    return answer;
}