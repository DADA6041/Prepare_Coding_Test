function solution(arr, k) {
    var answer = [];
    let newSet = new Set(arr);
    if([...newSet].length >= k){
        answer = [...newSet].filter((i,idx) => idx < k)
    } else{
        answer = [...newSet];
        for(let j = 0; j <  k - [...newSet].length; j++){
            answer.push(-1)
        }
    }
    return answer;
}