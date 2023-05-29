function solution(str_list, ex) {
    let answer = [];
    str_list.forEach(i => {
        i.includes(ex) ? i : answer.push(i);
    });
    return answer.join("");
}