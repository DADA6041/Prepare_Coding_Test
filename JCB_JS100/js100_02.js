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