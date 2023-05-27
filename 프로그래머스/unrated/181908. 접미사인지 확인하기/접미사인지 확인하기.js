function solution(my_string, is_suffix) {
    let arr = [];
    for(let i = 0; i <= my_string.length; i++){
        arr.push(my_string.substr(i));
    }
    return arr.filter(i => i === is_suffix).length >= 1 ? 1 : 0;;
}