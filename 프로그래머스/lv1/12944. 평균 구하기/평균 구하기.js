function solution(arr) {
    let Arrteamp = arr.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    let answer = Arrteamp / arr.length;
    return answer;
}