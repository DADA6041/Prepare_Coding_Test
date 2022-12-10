/**
# 문제81 : 지뢰찾기
지뢰를 찾는 문제입니다. 다음 그림처럼 깃발 주위에는 지뢰가 사방으로 있습니다. **깃발의 위치를 입력받아 지뢰와 함께 출력 해주는 프로그램**을 만드세요.

- 아래 Case 외 예외 사항은 고려하지 않습니다.
(예를 들어 깃발이 붙어 있을 경우는 고려하지 않습니다.) 
실력이 되시는 분들은 깃발이 붙어있을 상황까지 고려해 주세요.

데이터
let flag = []; //지뢰 없이 깃발만 있는 리스트
let minesweeper = []; //지뢰를 찾은 리스트
let count = 0;

console.log(flag);
console.log(minesweeper);


입력
0 1 0 0 0
0 0 0 0 0
0 0 0 1 0
0 0 1 0 0
0 0 0 0 0
//"0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0"

출력
* f * 0 0
0 * 0 * 0
0 0 * f *
0 * f * 0
0 0 * 0 0
*/
let count = 0;

let flagSplit = "0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0".split('\n');
for(let i of flagSplit) {
  flagSplit[count] = i.replace('1', 'f').split(' ');
  count += 1;
}

count = 0;
let search = 0;

for (let j of flagSplit) {
  for (let k of j) {
    if(k === 'f'){
      if(search > 0) {
        j[search - 1] = '*';
      }
      if(search < 4) {
        j[search + 1] = '*';
      }
      if(count > 0) {
        flagSplit[count - 1][search] = '*';
      }
      if(count < 4) {
        flagSplit[count + 1][search] = '*';
      }
    }
    search++;
  }
  count++;
  search = 0;
}

console.log(flagSplit);

// ----------------------------------------------------------

