function solution(arr1, arr2) {
    let answer = 0;
    if(arr1.length === arr2.length){
        if(arr1.reduce((a, b) => a + b) === arr2.reduce((a, b) => a + b)){
            return answer = 0;
        }
        arr1.reduce((a, b) => a + b) > arr2.reduce((a, b) => a + b) ? answer = 1 : answer = -1;
    } else if(arr1.length !== arr2.length){
        arr1.length > arr2.length ? answer = 1 : answer = -1;
    }
    return answer;
}