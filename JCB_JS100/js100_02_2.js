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
for (let i of flagSplit) {
    flagSplit[count] = i.replace('1', 'f').split(' ');
    count += 1;
}

count = 0;
let search = 0;

for (let j of flagSplit) {
    for (let k of j) {
        if (k === 'f') {
            if (search > 0) {
                j[search - 1] = '*';
            }
            if (search < 4) {
                j[search + 1] = '*';
            }
            if (count > 0) {
                flagSplit[count - 1][search] = '*';
            }
            if (count < 4) {
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

/*
# 문제82 : 수학 괄호 파싱
수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다. 괄호는 소괄호밖에 없습니다.

데이터 입력(1), 프로그램 종료(2) : 1
데이터를 입력하세요: 3 + 5
True


데이터 입력(1), 프로그램 종료(2) : 1
데이터를 입력하세요: 5 + 7) * (3 * 5)
False

# 문제83 : 수학 괄호 파싱 2

수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다.
괄호는 소괄호와 중괄호가 있습니다.

데이터 입력(1), 프로그램 종료(2) : 1
데이터를 입력하세요: 5 + 7 * {(3 * 5)}
True

데이터 입력(1), 프로그램 종료(2) : 1
데이터를 입력하세요: 5 + 7){ * (3 * 5)
False

데이터 입력(1), 프로그램 종료(2) : 2
*/

let parenthInp = '5 + 7){ * (3 * 5)'

function math(e) {

    const m = {
        ')': '(',
        '}': '{'
    }

    let stack = [];

    for (let i in e) {
        if (e[i] === '(' || e[i] === '{') {
            stack.push(e[i]);
        } else if (m[e[i]]) {
            if (stack.length === 0) {
                return false;
            } else {
                let j = m[e[i]];
                if (j !== stack.pop()) {
                    return false;
                }
            }
        }
    }
    return stack.length === 0;
}

console.log(math(parenthInp));

// ----------------------------------------------------------

/**
# 문제84 : 숫자뽑기
소정이는 어떤 숫자에서 k개의 수를 뽑았을 때 가장 큰 수를 찾는 놀이를 하고 있습니다. 
예를 들어, 숫자 1723에서 두 개의 수를 뽑으면 [17, 12, 13, 72, 73, 23]을 만들 수 있습니다.
이 중 가장 큰 수는 **73**입니다.

위 예시처럼 **어떤 수 n에서 k개의 수를 선택하여 만들 수 있는 수 중에서 가장 큰 수**를 찾아 주세요.
*/

function selectNum(arrNum, selNum) {
    let allNum = [];

    const func = (pre, arrNum) => {
        for (let i = 0; i < arrNum.length; i++) {
            allNum.push(pre + arrNum[i]);
            func(pre + arrNum[i], arrNum.slice(i + 1));
        }
    }
    func('', arrNum);

    const result = allNum.filter(i => i.length === selNum)
        .sort((a, b) => b - a);
    console.log(result[0]);
    return result;
}

const arrNum = '1723'.split('');
const selNum = 2;

selectNum(arrNum, selNum);

// ----------------------------------------------------------

/**
# 문제85 : 숫자놀이

일정한 규칙을 가지고 있는 숫자를 나열하는 놀이를 하는 중입니다.
이전 숫자에서 각 숫자의 개수를 나타내어 숫자로 만들고 다시 그 숫자를 같은 규칙으로 만들며 나열합니다.
이 놀이는 1부터 시작합니다.
다음 수는 1이 1개이기 때문에 '11'이 되고,
'11'에서 1이 2개이기 때문에 그다음은 '12'가 됩니다.

즉,
1. 1  → (1)
2. 11 → (1이 1개)
3. 12 → (1이 2개)
4. 1121 → (1이 1개 2가 1개)
5. 1321 → (1이 3개 2가 1개)
6. 122131 → (1이 2개 2가 1개 3이 1개)
7. 132231 → (1이 3개 2가 2개 3이 1개)

위와 같이 진행되는 규칙을 통해 진행 횟수 N을 입력받으면 해당되는 수를 출력하세요.

입력
6

출력
122131
*/

function playNum(inpPlayNum) {
    let answer = '1';
    if (inpPlayNum === 1) {
        return 1;
    }

    for (i = 1; i < inpPlayNum; i++) {
        answer = rule(answer);
    }
    return answer;
}

function rule(answer) {
    let result = '';
    let maxNum = 9;

    for (let i = 1; i < maxNum; i++) {
        let reg = new RegExp(i, 'g');
        let count = (answer.match(reg) || []).length;

        if (count >= 1) {
            result = result + String(i) + String(count);
        }
    }
    return result;
}

const inpPlayNum = 6;

console.log(playNum(inpPlayNum));

// ----------------------------------------------------------

/*
# 문제86 : 회전 초밥

쉔은 회전 초밥집에 갔습니다.
초밥집에 간 쉔은 각 초밥에 점수를 매기고 낮은 점수의 순서로 초밥을 먹으려 합니다.
이때 n위치에 놓여진 초밥을 먹고자 할 때 접시가 몇 번 지나가고 먹을 수 있을지 출력하세요.

1. 초밥은 놓여진 위치에서 옮겨지지 않습니다.
2. 지나간 초밥은 나머지 초밥이 지나간 후에 다시 돌아옵니다.
3. 초밥은 1개 이상 존재합니다.

예)
A, B, C, D, E 초밥이 있고 각 점수가 1, 1, 3, 2, 5 일 때 3번째(C초밥)을 먹게 되는 순서는
점수가 1인 초밥 A와 B를 먹고 다음으로 점수가 2인 D 초밥을 먹어야 됩니다.
A B C D E 의 순서로 접시가 도착하지만 C가 도착했을때 먹지 못하는 상황이 옵니다.
2점을 주었던 D를 먼저 먹어야 C를 먹을 수 있습니다. 
즉, A B C D E **C** 의 순서로, 접시가 5번 지나가고 먹게 된다.


입력
point = [1,1,3,2,5]
dish = 3

출력
5

입력
point = [5,2,3,1,2,5]
dish = 1

출력
10

//point 각 접시별 점수가 들어있는 배열
//dish 먹고자하는 접시의 위치
*/

const sushiPoint = [1, 1, 3, 2, 5];
const sushiDish = 3;

function sushiPlate(sushiPoint, sushiDish) {
    let answer = 0;
    sushiDish -= 1;

    let s = sushiPoint.map(i => i);
    s.sort((a, b) => a - b);

    while(true){
        let p = sushiPoint.shift();

        if(s[0] === p){
            if(sushiDish === 0) {
                break;
            }
            sushiDish -= 1;
            s.shift();
        } else {
            sushiPoint.push(p);
            if(sushiDish === 0) {
                sushiDish = sushiPoint.length - 1;
            } else {
                sushiDish -= 1;
            }
        }
        answer += 1;
    }
    return answer;
}

console.log(sushiPlate(sushiPoint, sushiDish));

// ----------------------------------------------------------

/*
# 문제87 : 천하제일 먹기 대회
천하제일 먹기 대회가 개최되었습니다.
이 대회는 정해진 시간이 끝난 후 음식을 먹은 그릇 개수를 파악한 후 각 선수들의 등수를 매깁니다. 

1. 같은 이름의 선수는 없습니다.
2. 접시의 수가 같은 경우는 없습니다.

손오공 야모챠 메지터 비콜로
70 10 55 40

{'손오공': 1, '메지터': 2, '비콜로': 3, '야모챠': 4}

["홍길동","엄석대","연개소문","김첨지"]
[2, 1, 10, 0]

{'연개소문': 1, '홍길동': 2, '엄석대': 3, '김첨지': 4}
*/

const inpName = "손오공 야모챠 메지터 비콜로".split(" ");
const inpPlate = "70 10 55 40".split(" ").map(i => parseInt(i));

function eatCont(name, plate){
    let rankSort = plate.map(i => i).sort((a, b) => b - a);
    let rank = plate.map(j => rankSort.findIndex((item) => item === j) + 1);

    let temp = [];
    
    for (let i = 0; i < name.length; i++){
        let obj ={};
        obj['name'] = name[i];
        obj['value'] = rank[i];
        temp.push(obj);
    }
    let tempSort = temp.sort((a, b) => a.value - b.value);
    let result = {};
    for(i of tempSort){
        result[i['name']] = i.value;
    }
    return result;
}

console.log(eatCont(inpName, inpPlate));

// ----------------------------------------------------------