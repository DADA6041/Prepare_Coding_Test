function solution(numbers) {
    let arrSum = numbers.reduce((acc, cur) => acc + cur);
    return 45 - arrSum;
}