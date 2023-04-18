function solution(arr1, arr2) {
     return arr1.map((e,i) => arr2[i].map((v,j) => arr1[i][j]+arr2[i][j]))
}