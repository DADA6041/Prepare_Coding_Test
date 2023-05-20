function solution(arr) {
    return arr.map((i) => {
        if(i >= 50 && i % 2 === 0) {
           i = i / 2;
        } else if(i < 50 && i % 2 !== 0){
            i = i * 2;
        } else {
            i = i;
        }
        return i;
    })
}