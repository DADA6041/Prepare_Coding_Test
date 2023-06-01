function solution(arr, delete_list) {
    var answer = [];
    let setA=new Set(arr)
    let setB=new Set(delete_list)
    Set.prototype.difference = function (set) {
        return new Set([...this].filter(v => !set.has(v)));
      };

    return Array.from(setA.difference(setB));
}