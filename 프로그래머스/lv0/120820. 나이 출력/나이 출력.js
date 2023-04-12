function solution(age) {
    let year = new Date();
    let answer = year.getFullYear() - age;
    return answer;
}