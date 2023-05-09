function solution(array) {
  let obj = {};
  let arr = [];
  
  for (let i of array) obj[i] ? ++obj[i] :obj[i] = 1;
  for (let i in obj) arr.push([i, obj[i]]);
  arr.sort((a, b) => b[1] - a[1]);
  
  if (arr.length > 1 && arr[0][1] === arr[1][1]) return -1;
  return Number(arr[0][0]);
}