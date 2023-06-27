function solution(my_string, s, e) {
    let temp = my_string.substring(s, e + 1);
    let tempArr = my_string.split(temp);
    return s === e? my_string : [tempArr[0], temp.split("").reverse().join(""),tempArr[1]].join("");
}