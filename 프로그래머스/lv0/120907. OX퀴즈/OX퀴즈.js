function solution(quiz) {
    answer = []
    for (let i = 0; i < quiz.length; i++){
        let tempArr = quiz[i].split(' = ');
        if(!(eval(tempArr[0]) == tempArr[1])){
            answer.push('X');
        } else {
            answer.push('O'); 
        }
    }
    return answer
}
