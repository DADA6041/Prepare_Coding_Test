function solution(num_list) {
    var answer = [];
    let odd = 0;
    let even = 0;
    num_list.forEach(i => {
        if(i % 2 === 0){
            even++;
        } else {
            odd++;
        }

    })
    answer.unshift(odd);
    answer.unshift(even);
    return answer;
}