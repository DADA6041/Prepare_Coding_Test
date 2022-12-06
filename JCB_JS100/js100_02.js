/*
# 문제51 : merge sort를 만들어보자
다음 코드의 빈칸을 채워 병합정렬을 완성해 봅시다.
*/

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    return result;
}

const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(mergeSort(array));

// ----------------------------------------------------------

/*
# 문제52 : quick sort
다음 빈 칸을 채워 퀵 정렬을 완성해주세요.
*/

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot,quickSort(right))
}

const array2 = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(quickSort(array2));

// ----------------------------------------------------------

/*
# 문제53 : 괄호 문자열
괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 그중 괄호의 모양이 바르게 구성된 문자열을 **바른 문자열**, 그렇지 않은 문자열을 **바르지 않은 문자열**이라 부르도록 하자. 

(())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
(해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)

**입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.**
*/

const parentheses = prompt('괄호를 입력해주세요');

let openCount = 0;
let closeCount = 0;

for(let i = 0; i < parentheses.length; i++){
    if(parentheses[i] === '('){
        openCount ++;
    } else if(parentheses[i] === ')'){
        closeCount++;
    }
}
openCount === closeCount ? console.log('Yes') : console.log('No');

// ----------------------------------------------------------

/*
# 문제54 : 연속되는 수
은주는 놀이공원 아르바이트를 하고 있다. 은주가 일하는 놀이공원에서는 현재 놀이공원 곳곳에 숨겨진 숫자 스탬프를 모아 오면 선물을 주는 이벤트를 하고 있다. 숫자 스탬프는 매일 그 수와 스탬프에 적힌 숫자가 바뀌지만 그 숫자는 항상 연속된다. 
그런데 요즘 다른 날에 찍은 스탬프를 가지고 와 선물을 달라고 하는 손님이 늘었다.

스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오

입력1
1 2 3 4 5

출력1
YES


입력2
1 4 2 6 3

출력2
NO
*/

const stamp = prompt('숫자를 입력해 주세요').split(' ').map(i => parseInt(i));

function stampPick(sortArr){
    let sortStamp = sortArr.sort((a, b) => a - b);

    for (let i = 0; i < sortStamp.length; i++){
        if(sortStamp[i] + 1 !== sortStamp[i + 1]){
            return 'No'
        }
        return 'Yes'
    }
}
console.log(stampPick(stamp))

// ----------------------------------------------------------

/*
# 문제55 : 하노이의 탑
하노이의 탑은 프랑스 수학자 에두아르드가 처음으로 발표한 게임입니다.
모든 원반을 옮기기 위해 실행되어야 할 최소 원반 이동 횟수를 계산하는 프로그램을 완성해 주세요.
*/

const route = []; //순회 경로

function hanoi(num, start, end, temp) {
    //원판이 한 개일 때에는 바로 옮기면 됩니다.
    if (num === 1) {
        route.push([start, end]);
        return NaN;
    }

    //원반이 n-1개를 경유기둥으로 옮기고
    hanoi(num - 1, start, end, temp);
    //가장 큰 원반은 목표기둥으로
    route.push([start, end]);
    //경유기둥과 시작기둥을 바꿉니다.
    hanoi(num-1, temp, end, start);
}

hanoi(3, 'A', 'B', 'C');
console.log(route);
console.log(route.length);

// ----------------------------------------------------------

/*
# 문제56 : 객체의 함수 응용
다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

데이터
nationWidth = {
     'korea': 220877,
     'Rusia': 17098242,
     'China': 9596961,
     'France': 543965,
     'Japan': 377915,
    'England' : 242900,
}

출력
England 22023
*/
nationWidth = {
    'korea': 220877,
    'Rusia': 17098242,
    'China': 9596961,
    'France': 543965,
    'Japan': 377915,
    'England': 242900,
}

let nationArr =  Object.entries(nationWidth);

const nationWidthDiff = nationArr.map(i => [i[0], i[1] - nationArr[0][1]])
                                .splice(1)
                                .sort((a, b) => a[1] - b[1]);

let [a, b] = [nationWidthDiff[0][0], nationWidthDiff[0][1]];

console.log(a, b);

// ----------------------------------------------------------

/*
# 문제57 : 1의 개수
**0부터 1000까지 1의 개수를 세는 프로그램**을 만들려고 합니다. 예를 들어 0부터 20까지 1의 개수를 세어본다면 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 12개의 1이 있게 됩니다. 11은 1이 2번 들어간 셈이죠.

그렇다면 0부터 1000까지의 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요.
*/

let thousandArr = new Array(1001)
                        .fill(0)
                        .map((_, i) => i)
                        .join('')
                        .split('')
                        .filter(i => i == 1);
console.log(thousandArr.length);

// ----------------------------------------------------------

/*
# 문제58 : 콤마 찍기
원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

**숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.**
예를 들어, **123456789**를 입력받았으면 **123,456,789**를 출력해야 합니다.
*/

const commaInp = prompt('숫자를 입력해 주세요');

// 1번
let commaNum1 = new Intl.NumberFormat().format(parseInt(commaInp));
console.log(commaNum1);

// 2번
console.log(parseInt(commaInp).toLocaleString());

// 3번 
let commaNum2 = '';

for (let i = 0; i < commaInp.length; i++){
    if((commaInp.length - i) % 3 === 0 && i !== 0){
        commaNum2 += ','
    }
    commaNum2 += commaInp[i];
}
console.log(commaNum2);

// ----------------------------------------------------------

/*
# 문제59 : 빈칸채우기
총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.

입력
hi

출력
========================hi========================
*/

const centerStr = prompt('문자열을 입력해주세요!');

let dash = 25 + parseInt(centerStr.length / 2);

console.log(centerStr.padStart(dash, '=').padEnd(50, '='));

// ----------------------------------------------------------

/*
# 문제60 : 번호 매기기
새 학기가 되어 **이름을 가나다 순서대로 배정하고 번호를 매기려고 합니다**.
데이터에 입력된 이름을 아래와 같이 출력해 주세요.

출력
번호: 1, 이름: 강은지
번호: 2, 이름: 강채연
번호: 3, 이름: 권윤일
번호: 4, 이름: 김민호
번호: 5, 이름: 김유정
번호: 6, 이름: 김진이
번호: 7, 이름: 김채리
번호: 8, 이름: 박지호
번호: 9, 이름: 박현서
번호: 10, 이름: 최성훈
번호: 11, 이름: 한지호
번호: 12, 이름: 홍유진
*/

let students = ['강은지','김유정','박현서','최성훈','홍유진','박지호','권윤일','김채리','한지호','김진이','김민호','강채연'];

let newStuArr = students
                    .sort()
                    .map((i, index) => {
                        console.log(`번호: ${index}, 이름: ${i}`);
                    })

// ----------------------------------------------------------

/*
# 문제61 : 문자열 압축하기
문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

입력
aaabbbbcdddd

출력
a3b4c1d4
*/

const continuedStr =  prompt('연속된 문자열을 입력해 주세요') /*'aaabbbbcdddd'*/;

let strCount = 1;
let strOutput = '';

for(let i = 0; i < continuedStr.length; i++){
    if(continuedStr[i] === continuedStr[i + 1]){
        strCount++;
    } else if(continuedStr[i] !== continuedStr[i + 1]){
        strOutput += (continuedStr[i] + strCount);
        strCount = 1;
    }
}
console.log(strOutput);

// ----------------------------------------------------------

/*
# 문제62 : 20190923출력하기
`20190923`을 출력합니다.  아래 기준만 만족하면 됩니다.

1. 코드 내에 숫자가 없어야 합니다.
    - 예) console.log(20190923)이라고 하시면 안됩니다.
2. 파일 이름이나 경로를 사용해서는 안됩니다.
3. 시간, 날짜 함수를 사용해서는 안됩니다.
4. 에러 번호 출력을 이용해서는 안됩니다.
5. input을 이용해서는 안됩니다.
*/
const lengthArr = ['aa', '' , 'a', 'aaaaaaaaa', '', 'aaaaaaaaa', 'aa', 'aaa'];

let tempArr = [];
lengthArr.map(i => tempArr.push(i.length));

console.log(tempArr.join(''));

// ----------------------------------------------------------

/*
# 문제63 : 친해지고 싶어
한국 대학교의 김한국 교수님은 학생들과 친해지기 위해서 딸에게 줄임말을 배우기로 했습니다.
딸은 '**복잡한 세상 편하게 살자**'라는 문장을 '**복세편살**'로 줄여 말합니다.

교수님이 줄임말을 배우기 위해 아래와 같이 **어떤 입력이 주어지면 앞 글자만 줄여 출력**하도록 해주세요.
입력은 한글 혹은 영어로 입력되며, 띄어쓰기를 기준으로 하여 짧은 형태로 출력합니다.

입력
복잡한 세상 편하게 살자

출력
복세편살
*/
const abbre = prompt('문장을 입력해 주세요').split(' ');

let abbreResult = abbre.map(i => i[0]).join('');
console.log(abbreResult);

// ----------------------------------------------------------

/*
# 문제64 : 이상한 엘레베이터
정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.

예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

**입력**
정량 N이 입력됩니다.

**출력**
가장 적게 옮길 수 있는 횟수를 출력합니다.
만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.
*/

function lift(amount){
    let result = 0;
    while(true){
        if(amount % 7 === 0) {
            result += parseInt(amount / 7);
            console.log(result);
            break;
        }
        amount -= 3;
        result += 1;
        if(amount < 0 ){
            console.log(-1);
            break;
        }
    }
}
lift(28);

// ----------------------------------------------------------

/*
# 문제65 : 변형된 리스트
a = [1, 2, 3, 4]
b = [a, b, c, d]
이런 리스트가 있을 때 [[1, a], [b, 2], [3, c], [d, 4]] 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.
*/

const arrA = [1, 2, 3, 4];
const arrB = ['a', 'b', 'c', 'd'];
let arrC = [];

for (let i = 0; i < arrA.length; i++){
    if(i % 2 === 0){
        arrC.push([arrA[i], arrB[i]]);
    } else {
        arrC.push([arrB[i], arrA[i]]);
    }
}
console.log(arrC);

// ----------------------------------------------------------

/*
# 문제66 : 블럭탑쌓기
탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
순서에 맞게 쌓지 않으면 무너질 수 있습니다.
예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

- B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
- B 다음 블럭이 C가 될 수 있습니다.

쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

1. 블럭은 알파벳 대문자로 표기합니다.
2. 규칙에 없는 블럭이 사용될 수 있습니다.
3. 중복된 블럭은 존재하지 않습니다.

입력
탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
규칙 = "ABD"

출력
["가능", "불가능", "가능", "가능", "가능"]
*/

const tower = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
const rules = "ABD"

function solution(tower, rules) {
    let answer = [];
    for (let i of tower){
        answer.push(stackBlock(i, rules));
    }
    return answer;
}

function stackBlock(i, rules){
    let temp = rules.indexOf(rules[0]);

    for (let j of i){
        if(rules.includes(j)){
            if(temp > rules.indexOf(j)){
                return '불가능';
            }
            temp = rules.indexOf(j);
        }
    }
    return'가능';
}
console.log(solution(tower, rules));

// ----------------------------------------------------------

/*
# 문제67 : 민규의 악수
광장에서 모인 사람들과 악수를 하는 행사가 열렸습니다.
참가자인 민규는 몇명의 사람들과 악수를 한 후 중간에 일이 생겨 집으로 갔습니다.

이 행사에서 진행된 악수는 총 n번이라고 했을 때,
민규는 몇 번의 악수를 하고 집으로 돌아갔을까요?
그리고 민규를 포함한 행사 참가자는 몇 명일까요?

- 악수는 모두 1대 1로 진행이 됩니다.
- 민규를 제외한 모든 참가자는 자신을 제외한 참가자와 모두 한번씩 악수를 합니다.
- 같은 상대와 중복된 악수는 카운트 하지 않습니다.
- 민규를 제외한 참가자는 행사를 모두 마쳤습니다.

예를들어 행사에서 59회의 악수가 진행되었다면 민규는 4번의 악수를 하였고 민규를 포함한 참가자는 12명이다.

행사에서 진행된 악수 횟수(n)를 입력으로 받으면 민규의 악수 횟수와 행사 참가자 수가 출력됩니다.

입력
59

출력
[4, 12] // [악수 횟수, 행사 참가자 수]
*/

 /* prompt('총 횟수를 입력해 주세요'); */

function handShake(num) {
    let entries = 0;
    let totalShake = 0;
    let temp = 0;

    while(true){
        totalShake = parseInt((entries * (entries - 1)) / 2);
        if(num < totalShake){
            break;
        }
        temp = totalShake;
        entries += 1;
    }
    return [parseInt(num - temp), entries];
}

const shakeNum = 59;
console.log(handShake(shakeNum));

// ----------------------------------------------------------

/*
# 문제68 : 버스 시간표
학교가 끝난 지원이는 집에 가려고 합니다. 학교 앞에 있는 버스 시간표는 너무 복잡해서 버스 도착시간이 몇 분 남았는지 알려주는 프로그램을 만들고 싶습니다.

**버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램**을 만들어주세요.
- 버스 시간표와 현재 시간이 입력으로 주어집니다.
- 출력 포맷은 "00시 00분"입니다.
만약 1시간 3분이 남았다면 **"01시간 03분"**으로 출력해야 합니다.
- 버스 시간표에 현재 시간보다 이전인 버스가 있다면 **"지나갔습니다."**라고 출력합니다.

입력
["12:30", "13:20", "14:13"]
"12:40"

출력
['지나갔습니다', '00시간 40분', '01시간 33분']
*/

function solution(timeTable, now){
    let result = [];
    now = now.split(':').map(i => parseInt(i));
    let nowMin = (now[0] * 60) + now[1];

    for (let i = 0; i < timeTable.length; i++){
        let busTime = timeTable[i].split(':').map(i => parseInt(i));
        busTime = (busTime[0] * 60) + busTime[1];
        if(busTime < nowMin){
            result.push('지나갔습니다.')
        } else {
            let hour = parseInt((busTime - nowMin) / 60);
            let minute = parseInt((busTime - nowMin) % 60);
            result.push(
                `${hour.toString().padStart(2,'0')}시간 ${minute.toString().padStart(2,'0')}분`);
        }
    }
    return result;
}

const timeTable = ["12:30", "13:20", "14:13"];
const now = "12:40"

console.log(solution(timeTable, now));

// ----------------------------------------------------------

/*
# 문제69 : 골드바흐의 추측
골드바흐의 추측(Goldbach's conjecture)은 오래전부터 알려진 정수론의 미해결 문제로, 2보다 큰 모든 짝수는 두 개의 소수(Prime number)의 합으로 표시할 수 있다는 것이다. 이때 하나의 소수를 두 번 사용하는 것은 허용한다. - 위키백과
위 설명에서 2보다 큰 모든 짝수를 두 소수의 합으로 나타낸 것을 골드바흐 파티션이라고 합니다.

예)
100 == 47 + 53
56 == 19 + 37

**2보다 큰 짝수 n이 주어졌을 때, 골드바흐 파티션을 출력하는 코드를** 작성하세요. 
* 해당 문제의 출력 형식은 자유롭습니다. 가능하시다면 골드바흐 파티션 모두를 출력하거나, 그 차가 작은 것을 출력하거나 그 차가 큰 것 모두 출력해보세요.
*/

const GoldbachInp = 100;/*  prompt('2보다 큰 짝수를 입력해 주세요'); */
let isPrime = true;
let prime = [];
let GoldbachResult = [];

for(let i = 2; i < GoldbachInp; i++){
    for(let j = 2; j < i; j++){
        if(i % j === 0){
            isPrime = false;
        }
    }
    if(isPrime) {
        prime.push(i);
    }
    isPrime = true;
}

for(let k of prime){
    if(prime.includes(GoldbachInp - k) && k <= GoldbachInp - k){
        GoldbachResult.push([k, GoldbachInp - k]);
    }
}
console.log(GoldbachResult);

// ----------------------------------------------------------

/*
# 문제70 : 행렬 곱하기
행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.

입력
a = [[1, 2],
	[2, 4]]

b = [[1, 0],
	[0, 3]]

출력
[[1, 6], [2, 12]]
*/

let matrixA = [[1, 2],
                [2, 4]]

let matrixB = [[1, 0],
                [0, 3]]

function matrixSol(a, b){

    if(a[0].length === b.length){
        let result = [];
        for(let i = 0; i < a.length; i++){
            let row = [];
            for(let j = 0; j < a.length; j++){
                let el = 0;
                for(let k = 0; k < a.length; k++){
                    el += a[i][k] * b[k][j];
                }
                row.push(el);
            }
            result.push(row);
        }
        return result;
    } else{
        return -1;
    }
}
console.log(matrixSol(matrixA,matrixB));

// ----------------------------------------------------------

/*
# 문제71 : 깊이 우선 탐색
**깊이 우선 탐색**이란 목표한 노드를 찾기 위해 가장 우선순위가 높은 노드의 자식으로 깊이 들어갔다가 목표 노드가 존재하지 않으면 처음 방문한 노드와 연결된 다른 노드부터 그 자식 노드로 파고드는 검색 방법을 말합니다.
다음과 같이 리스트 형태로 노드들의 연결 관계가 주어진다고 할 때 깊이 우선 탐색으로 이 노드들을 탐색했을 때의 순서를 공백으로 구분하여 출력하세요.

데이터
graph = {'E': ['D', 'A'],
        'F': ['D'],
        'A': ['E', 'C', 'B'],
        'B': ['A'],
        'C': ['A'],
        'D': ['E','F']}

출력
E D F A C B
*/

graph = {'E': ['D', 'A'],
        'F': ['D'],
        'A': ['E', 'C', 'B'],
        'B': ['A'],
        'C': ['A'],
        'D': ['E','F']}

function dfs(graph, start){
    let visited = [];
    let stack = [start];

    while(stack.length !== 0){
        let n = stack.pop();
        if(!visited.includes(n)) {
            visited.push(n);
            let linked = graph[n].filter(x => !visited.includes(x));
            for(let i of linked){
                stack.push(i);
            }
        }
    }
    return visited;
}

console.log(dfs(graph, 'E'));

// ----------------------------------------------------------

/*
# 문제72 : 너비 우선 탐색
**너비 우선 탐색**이란 어떤 노드를 방문하여 확인한 후, 목표한 노드가 아니면 그 노드와 연결된 정점들 중에서 우선순위가 동일한 다른 노드를 찾고 그 순위에 없으면 그다음 순위 노드를 차례대로 찾는 방법이다.
다음과 같이 입력이 주어질 때 너비 우선 탐색을 한 순서대로 노드의 인덱스를 공백 구분으로 출력하세요.
*/

function bfs(graph, start){
    let visited = [];
    let queue = [start];

    while(queue.length !== 0){
        let n = queue.shift();
        if(!visited.includes(n)) {
            visited.push(n);
            let linked = graph[n].filter(x => !visited.includes(x));
            for(let i of linked){
                queue.push(i);
            }
        }
    }
    return visited;
}

console.log(bfs(graph, 'E'));

// ----------------------------------------------------------

/*
# 문제73 : 최단 경로 찾기
다음과 같이 노드의 연결 관계가 리스트 형태로 주어집니다. 그다음 경로를 구할 두 정점이 공백으로 구분되어 주어질 것입니다. 
두 정점 사이를 이동할 수 있는 최단 거리를 출력하는 프로그램을 작성해 주세요. 
이때 최단 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 갈 수 있는 가장 적은 간선의 수를 의미합니다.

데이터
graph = {'A': ['B', 'C'],
        'B': ['A', 'D', 'E'],
        'C': ['A', 'F'],
        'D': ['B'],
        'E': ['B', 'F'],
        'F': ['C', 'E']}

입력
A F

출력
2
*/

let path = {'A': ['B', 'C'],
        'B': ['A', 'D', 'E'],
        'C': ['A', 'F'],
        'D': ['B'],
        'E': ['B', 'F'],
        'F': ['C', 'E']}

const userInput = prompt('입력해 주세요').split(' ');

const startNode = userInput[0];
const endNode = userInput[1];

let queue = [startNode];
let visited = [startNode];

function shortPath() {
    let count = -1;

    while(queue.length !== 0){
        count += 1;
        let size = queue.length;
        for (let i = 0; i < size; i++){
            let node = queue.splice(0, 1);
            if(node == endNode){
                return count;
            }
            for (let nextNode in path[node]){
                if(!visited.includes(path[node][nextNode])){
                    visited.push(path[node][nextNode]);
                    queue.push(path[node][nextNode]);
                }
            }
        }
    }
}
console.log(shortPath());

// ----------------------------------------------------------

/*
# 문제74 : 최장 경로 찾기
다음과 같이 노드의 연결 관계가 주어집니다. 
입력으로는 경로를 구할 두 정점의 번호가 공백으로 구분되어 주어집니다. 
우리는 **이 두 정점으로 가기 위한 최대 거리**를 구하고자 합니다. 
최대 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 경유할 수 있는 가장 많은 간선의 수를 뜻합니다.

데이터
graph = {1: [2, 3, 4],
				2: [1, 3, 4, 5, 6],
				3: [1, 2, 7],
				4: [1, 2, 5, 6],
				5: [2, 4, 6, 7],
				6: [2, 4, 5, 7],
				7: [3, 5, 6]}


입력
1 7

출력
6
*/
pathLong = {1: [2, 3, 4],
    2: [1, 3, 4, 5, 6],
    3: [1, 2, 7],
    4: [1, 2, 5, 6],
    5: [2, 4, 6, 7],
    6: [2, 4, 5, 7],
    7: [3, 5, 6]}


const userInputLong = prompt('입력해 주세요').split(' ');

const startNodeLong = parseInt(userInputLong[0], 10);
const endNodeLong = parseInt(userInputLong[1], 10);


let queueL = [startNodeLong];
let visitedL = [];

function longPath(n, visitedL){
    let node = n[n.length -1];
    let length = 0;

    if(node == endNodeLong) {
        return visitedL.length;
    }

    if(visitedL.includes(node)){
        return visitedL.length;
    } else{
        visitedL.push(node);
    }

    let max = [];

    for(let next_Node in pathLong[node]){
        n.push(pathLong[node][next_Node]);
        max.push(length, longPath(n, visitedL));
        length = Math.max.apply(null, max);

        queueL.pop();
    }
    return length;
}

console.log(longPath(queueL, visitedL));

// ----------------------------------------------------------

/*
# 문제75 : 이상한 369
369 게임을 하는데 조금 이상한 규칙이 있습니다. 3이나 6, 9 일 때만 박수를 쳐야합니다. 예를 들어 13, 16과 같이 3과 6, 9 만으로 된 숫자가 아닐 경우엔 박수를 치지 않습니다.
수현이는 박수를 몇 번 쳤는지 확인하고 싶습니다. 36일 때 박수를 쳤다면 박수를 친 횟수는 5번입니다.
n을 입력하면 박수를 몇 번 쳤는지 그 숫자를 출력해주세요.

입력
'93'

출력
10
*/

const strangeInp = parseInt(prompt('숫자를 입력해 주세요'));
let strangeCount = 0;

for (let i = 1; i <= strangeInp; i++){
    let str = (i).toString().split('');
    let filtering = str.filter(i => i === '3' || i === '6' || i === '9');
    if(str.length === filtering.length){
        strangeCount += 1;
    }
}

console.log(strangeCount);

// ----------------------------------------------------------

/*
# 문제76 : 안전한 땅
전쟁이 끝난 후, A 나라에서는 폐허가 된 도시를 재건하려고 한다. 그런데 이 땅은 전쟁의 중심지였으므로 전쟁 중 매립된 지뢰가 아직도 많이 남아 있다는 것이 판명되었다. 
정부는 가장 먼저 지뢰를 제거하기 위해 수색반을 꾸렸다.
수색반은 가장 효율적인 지뢰 제거가 하고 싶다. 수색반은 도시를 격자무늬로 나눠놓고 자신들이 수색할 수 있는 범위 내에 가장 많은 지뢰가 매립된 지역을 가장 먼저 작업하고 싶다.
가장 먼저 테스트 케이스의 수를 나타내는 1이상 100 이하의 자연수가 주어진다.
각 테스트 케이스의 첫 줄에는 수색할 도시의 크기 a와 수색반이 한 번에 수색 가능한 범위 b가 주어진다. (a와 b 모두 정사각형의 가로 또는 세로를 나타낸다. 예를 들어 10이 주어지면 10x10칸의 크기를 나타낸다.)
그 후 a 줄에 걸쳐 도시 내 지뢰가 있는지의 여부가 나타난다. 
0은 지뢰가 없음 1은 지뢰가 있음을 뜻한다.
각 테스트 케이스에 대해 수색 가능한 범위 bxb 내에서 찾아낼 수 있는 가장 큰 지뢰의 개수를 구하라.

입력
1
5 3
1 0 0 1 0
0 1 0 0 1
0 0 0 1 0
0 0 0 0 0
0 0 1 0 0

출력
3
*/

let rect = 5;
let searchPlace = 3;
let minefield = [
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0]
];

let iadd = 0;
let jadd = 0;
let mineValue = 0;
let valueArray = [];

for(let iadd = 0; iadd <= rect - searchPlace; iadd++){
    for(let jadd = 0; jadd <= rect - searchPlace; jadd++){
        for(let i = iadd; i <= searchPlace - 1 + iadd; i++){
            for(let j = jadd; j <= searchPlace - 1 + jadd; j++){
                mineValue += minefield[i][j]
            }
        }
        valueArray.push(mineValue);
        mineValue = 0;
    }
}

console.log(Math.max.apply(null, valueArray));

// ----------------------------------------------------------

/*
# 문제77 : 가장 긴 공통 부분 문자열
**가장 긴 공통 부분 문자열(Longest Common Subsequence)**이란 A, B 두 문자열이 주어졌을 때 두 열에 공통으로 들어 있는 요소로 만들 수 있는 가장 긴 부분열을 말합니다. 여기서 부분열이란 다른 문자열에서 몇몇의 문자가 빠져 있어도 순서가 바뀌지 않은 열을 말합니다.
예를 들어 S1 = ['T', 'H', 'I', 'S', 'I', 'S', 'S', 'T', 'R', 'I', 'N', 'G', 'S']  S2 = ['T', 'H', 'I', 'S', 'I', 'S']라는 두 문자열이 있을 때 둘 사이의 부분 공통 문자열의 길이는 ['T', 'H', 'I', 'S', 'I', 'S']의 6개가 됩니다.
이처럼 **두 문자열이 주어지면 가장 긴 부분 공통 문자열의 길이를 반환하는 프로그램**을 만들어 주세요.
두 개의 문자열이 한 줄에 하나씩 주어집니다. 문자열은 알파벳 대문자로만 구성되며 그 길이는 100글자가 넘어가지 않습니다.
출력은 이 두 문자열의 가장 긴 부분 공통 문자열의 길이를 반환하면 됩니다.

- Test Case -

입력
THISISSTRINGS
THISIS

출력
6

-

입력
THISISSTRINGS
TATHISISKKQQAEW

출력
6

-

입력
THISISSTRINGS
KIOTHIKESSISKKQQAEW

출력
3

-

입력
THISISSTRINGS
TKHKIKSIS

출력
3
*/

function longStr(str) {
    let result = [];
    for(let i = 1; i < str.length + 1; i++){
        for(let j = 0; j < i; j++){
            result.push(str.slice(j, j + str.length - i + 1));
        }
    }
    return result
}

let inputOne = "THISISSTRINGS"
let inputTwo = "THISIS";
let ArrayOne = longStr(inputOne);
let ArrayTwo = longStr(inputTwo);

let intersection = ArrayOne.filter(i => ArrayTwo.includes(i));

intersection.sort((a, b) => b.length - a.length);

console.log(intersection[0], intersection[0].length);

// ----------------------------------------------------------

/*
# 문제78 : 원형 테이블

기린은 중국집에서 친구들과 만나기로 하고, 음식을 시켰습니다.
음식이 나오고 한참을 기다렸지만 만나기로 한 친구 2명이 오지 않았어요.

기린은 배가 너무 고파 혼자 음식을 먹기 시작합니다. 원형 테이블에는 N 개의 음식들이 있습니다.
한 개의 음식을 다 먹으면 그 음식의 시계방향으로 K 번째 음식을 먹습니다.
하지만 아직 오지 않은 친구들을 위해 2개의 접시를 남겨야 합니다.

**마지막으로 남는 음식은 어떤 접시인가요?**

입력은 2개의 정수로 이루어지며 공백으로 구분되어 입력됩니다.
첫 번째 숫자가 음식의 개수 N, 두 번째 숫자가 K입니다.
첫 번째 가져가는 음식이 K 번째 음식이며 나머지는 첫 번째 음식으로부터 시계방향으로 가져갑니다.

입력
6 3

남은 음식들의 번호를 배열의 형태로 출력합니다.

출력
[3, 5]
*/

const foodNum = '6 3'.split(' ');/* prompt('음식의 개수N, K번째 음식') */
const foodPlate = parseInt(foodNum[0]);
const nextPlate = parseInt(foodNum[1]);

function circleTable(n, k){
    let index = 0;
    let answer = [];
    for (let i = 0; i < n; i++){
        answer.push(i + 1);
    }
    while(answer.length > 2){
        if(index > answer.length - 1){
            index -= answer.length;
        }
        answer.splice(index, 1);
        index += k;
        index -= 1;
    }
    return answer
}

console.log(circleTable(foodPlate, nextPlate));

// ----------------------------------------------------------