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