function solution(my_string, alp) {
    return my_string.split("").map(i => i === alp ? i = alp.toUpperCase() : i).join("");
}