function solution(numbers, n) {
    var answer = 0;
    for (const i of numbers) {
      if(answer <= n){
          answer += i;
      }
    }
    return answer;
}