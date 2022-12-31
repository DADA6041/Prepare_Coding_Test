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

    while (true) {
        let p = sushiPoint.shift();

        if (s[0] === p) {
            if (sushiDish === 0) {
                break;
            }
            sushiDish -= 1;
            s.shift();
        } else {
            sushiPoint.push(p);
            if (sushiDish === 0) {
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

function eatCont(name, plate) {
    let rankSort = plate.map(i => i).sort((a, b) => b - a);
    let rank = plate.map(j => rankSort.findIndex((item) => item === j) + 1);

    let temp = [];

    for (let i = 0; i < name.length; i++) {
        let obj = {};
        obj['name'] = name[i];
        obj['value'] = rank[i];
        temp.push(obj);
    }
    let tempSort = temp.sort((a, b) => a.value - b.value);
    let result = {};
    for (i of tempSort) {
        result[i['name']] = i.value;
    }
    return result;
}

console.log(eatCont(inpName, inpPlate));

// ----------------------------------------------------------

/*
# 문제88 : 지식이의 게임 개발

지식이는 게임을 만드는 것을 좋아합니다. 하지만 매번 다른 크기의 지도와 장애물을 배치하는데 불편함을 겪고 있습니다. 이런 불편함을 해결하기 위해 **지도의 크기와 장애물의 위치, 캐릭터의 위치만 입력하면 게임 지형을 완성해 주는 프로그램**을 만들고 싶습니다.  지식이를 위해 게임 지형을 만드는 프로그램을 작성해 주세요.

- 가로(n), 세로(m)의 크기가 주어집니다.
- 지형의 테두리는 벽으로 이루어져 있습니다.
- 캐릭터가 있는 좌표가 배열 형태로 주어집니다.
- 장애물이 있는 좌표가 2차원 배열 형태로 주어집니다.

지도는 n x m 크기의 배열이며 배열 안의 값은
    -움직일 수 있는 공간(0)
    -캐릭터(1)
    -벽(2)
3개로 구분되어 있습니다.

입출력예시

입력
가로 = 4
세로 = 5
캐릭터위치 = [0,0]
장애물 = [[0,1],[1,1],[2,3],[1,3]]

make_map(가로, 세로, 캐릭터위치, 장애물)

출력
[2, 2, 2, 2, 2, 2]
[2, 1, 2, 0, 0, 2]
[2, 0, 2, 0, 2, 2]
[2, 0, 0, 0, 2, 2]
[2, 0, 0, 0, 0, 2]
[2, 0, 0, 0, 0, 2]
[2, 2, 2, 2, 2, 2]
*/

/*
# 문제89 : 지식이의 게임 개발 2

(연계형 문제 - 88번을 먼저 풀고 오셔야 합니다!)
제코베의 도움을 받아 성공적으로 지도를 만들어낸 지식이는 캐릭터의 움직임을 구현했습니다. 
하지만 지도 위의 캐릭터 위치를 나타내는데 문제가 발생했습니다.
지식이는 지도 위에서 캐릭터의 위치를 나타내기 위해 다시 한번 제코베에 도움을 요청합니다.

지도 위에서 캐릭터의 위치를 나타내주세요

1. 지도는 88번 문제의 해답을 사용해 주세요
2. 입력값은 지도, 캐릭터의 움직임입니다.
3. 캐릭터의 움직임은 { 상:1, 하:2, 좌:3, 우:4 }로 정수로 이루어진 배열이 들어갑니다.
4. 벽과 장애물은 통과할 수 없습니다. 
5. 마지막 캐릭터의 위치를 반영한 지도를 보여주고 위치를 반환하는 함수를 작성해 주세요.
데이터
가로 = 4
세로 = 5
캐릭터위치 = [0, 0]
장애물 = [[0,1],[1,1],[2,3],[1,3]]
console.log('캐릭터 이동 전 지도')
지도 = make_map(가로, 세로, 캐릭터위치, 장애물)

움직임 = [2,2,2,4,4,4]
console.log('캐릭터 이동 후 지도')
캐릭터 위치 = move(지도, 움직임)

출력
캐릭터 이동 전 지도
[2, 2, 2, 2, 2, 2]
[2, 1, 2, 0, 0, 2]
[2, 0, 2, 0, 2, 2]
[2, 0, 0, 0, 2, 2]
[2, 0, 0, 0, 0, 2]
[2, 0, 0, 0, 0, 2]
[2, 2, 2, 2, 2, 2]

캐릭터 이동 후 지도
[2, 2, 2, 2, 2, 2]
[2, 0, 2, 0, 0, 2]
[2, 0, 2, 0, 2, 2]
[2, 0, 0, 0, 2, 2]
[2, 0, 0, 0, 1, 2]
[2, 0, 0, 0, 0, 2]
[2, 2, 2, 2, 2, 2]
캐릭터위치 : [4, 4]
*/

function make_map(row, col, char, block, move) {
    let world_map = [];
    for (let i = 0; i < col + 2; i++) {
        world_map.push(Array(row + 2).fill(0));
    }

    for (let i in world_map) {
        for (let j in world_map[i]) {
            if (i == 0 || j == 0 || world_map[0].length - 1 == j || world_map.length - 1 == i) {
                world_map[i][j] = 2;
            }
        }
    }

    world_map[char[0] + 1][char[1] + 1] = 1;

    for (let i of block) {
        if (world_map[i[0] + 1][i[1] + 1] == 1) {
            world_map[i[0] + 1][i[1] + 1] = 1;
        } else {
            world_map[i[0] + 1][i[1] + 1] = 2;
        }
    }
    console.log(world_map);

    let location = [char[0] + 1, char[1] + 1];
    let x = location[1];
    let y = location[0];

    world_map[y][x] = 0;

    for (let i of move) {
        if (i === 1 && world_map[y - 1][x] != 2) {
            y -= 1;
        } else if (i === 2 && world_map[y + 1][x] != 2) {
            y += 1;
        } else if (i === 3 && world_map[x - 1][x] != 2) {
            x -= 1;
        } else if (i === 4 && world_map[x + 1][x] != 2) {
            x += 1;
        }
    }

    world_map[y][x] = 1;
    console.log(world_map);
    console.log(`캐릭터의 위치 : ${[x, y]}`);
};

const row = 4;
const col = 5;
const char = [0, 0];
const block = [[0, 1], [1, 1], [2, 3], [1, 3]];
const move = [2, 2, 2, 4, 4, 4];

make_map(row, col, char, block, move);

// ----------------------------------------------------------

/*
# 문제 90 : 같은 의약 성분을 찾아라!

의약품 성분이 총 8개인 약품들이 있습니다. 예를 들어 다음 데이터는 총 8개의 성분을 갖습니다.

판콜비 = 'ABCDEFGH'
넥타이레놀 = 'EFGHIJKL'

특정 약품 A의 성분이 공개되었을 때, 이와 유사한 성분을 가진 데이터들의 출력을 구하는 문제입니다.

입력 : 'ABCDEFGH' 4
데이터 : 'EFGHIJKL', 'EFGHIJKM', 'EFGHIJKZ' 등 1만 개의 데이터
출력 : 'EFGHIJKL', 'EFGHIJKM', 'EFGHIJKZ' 등 4개의 요소가 같은 약품 전부(4개 이상이 아니며 같은 요소가 4개인 것을 출력해야 합니다.)

* 해당 문제는 시간제한이 있습니다.
* 제약 데이터의 성분은 중복이 될 수 없습니다.
(예를 들어 'AAABBBAB'와 같은 데이터는 없습니다.)
*/

let tempL = [];

for (let i = 65; i < 91; i++) {
    tempL.push(String.fromCharCode(i));
}

function randomLetter(letter) {
    let string = [];

    while (string.length !== 8) {
        let a = letter[Math.floor(Math.random() * letter.length)];
        if (!string.includes(a)) {
            string.push(a);
        }
    }

    let medicine = string.join('');
    return medicine;
}

let totalMedicine = [];

while (totalMedicine.length !== 100) {
    let medi = randomLetter(tempL);
    if (!totalMedicine.includes(medi)) {
        totalMedicine.push(medi);
    }
}

console.log(totalMedicine);

const userInpIsMatch = 'ABCDEFGH 4'.split(' ');
let matchResult = [];

for (let i of totalMedicine) {
    let setUserData = new Set(userInpIsMatch[0]);
    let setMedi = new Set(i);

    let intersection = new Set([...setUserData].filter(i => setMedi.has(i)));
    if (intersection.size === parseInt(userInpIsMatch[1])) {
        matchResult.push(i);
    }
}
console.log(matchResult);
console.log(matchResult.length);

// ----------------------------------------------------------

/*
# 문제 91 : 반평균 등수

한 반에 30명인 학생, 총 7개의 반 점수가 '국어, 영어, 수학, 사회, 과학' 순서로 있는 다중 리스트를 랜덤 한 값으로 만들어주시고 아래 값을 모두 출력하세요.

1. 반 점수 모두가 담긴 전교 점수 다중 리스트를 만들어주세요.
2. 반 평균을 구하세요.
3. 반 1등 점수를 구하세요.
4. 전교 평균을 구하세요.

(출력 형식은 상관없습니다.)
*/

let student_score = [];
let class_score = [];
let total_score = [];

for (let k = 0; k < 7; k++) {
    class_score = [];
    for (let j = 0; j < 30; j++) {
        student_score = [];
        for (let i = 0; i < 5; i++) {
            student_score.push(Math.floor(Math.random() * 100) + 1);
        }
        class_score.push(student_score);
    }
    total_score.push(class_score);
}

console.log(total_score); // 1. 반 점수 모두가 담긴 전교 점수 다중 리스트

let totalAvg = [];
let classAvg = [];
let studentAvg = 0;
let studentSum = 0;

for (let t of total_score) {
    classAvg = [];
    for (let c of t) {
        studentSum = c.reduce((a, b) => a + b);
        studentAvg = studentSum / 5;
        classAvg.push(studentAvg);
    }
    totalAvg.push(parseInt(classAvg.reduce((a, b) => a + b) / 30));
    console.log(classAvg);
    console.log(classAvg.sort((a, b) => b - a)[0]); // 3. 반 1등
    classAvg = [];
}

console.log(totalAvg); // 2. 반평균
console.log(parseInt(totalAvg.reduce((a, b) => a + b) / 7)); // 4. 전체 평균

// ----------------------------------------------------------

/*
# 문제92 : 키보드 고장

P 회사의 회계를 처리하던 은정은 커피를 마시다가 키보드에 커피를 쏟고 말았습니다.
휴지로 닦고 말려보았지만 숫자 3, 4, 6이 도통 눌리지 않습니다.
10분 뒤, 모든 직원들에게 월급을 입금해 주어야 합니다.
여유 키보드는 없으며, 프로그래밍을 매우 잘하고, 모든 작업을 수작업으로 하고 있습니다.

이에 눌리지 않는 키보드를 누르지 않고 월급 입금을 두 번에 나눠주고 싶습니다.

1. 직원은 2000명이며, 3초 이내 수행을 해야합니다.
2. 입력값의 형식은 csv파일형식이며 이과장 '3,000,000', 'S은행', '100-0000-0000-000' 형식으로 주어집니다.
3. 출력값의 형식은 csv파일형식이며 이과장 '1,500,000', '1,500,000', 'S은행', '100-0000-0000-000' 입니다. 또는 '1,000,000', '2,000,000', 'S은행', '100-0000-0000-000' 도 괜찮습니다.

이대표,'333,356,766','S은행','100-0000-0000-001'
최차장,'5,000,000','S은행','100-0000-0000-002'
이과장,'3,200,000','S은행','100-0000-0000-003'
홍팀장,'3,300,000','S은행','100-0000-0000-004'
이대리,'5,300,000','S은행','100-0000-0000-005'
*/

const bankInp = `이대표,'333,356,766','S은행','100-0000-0000-001'
최차장,'5,000,000','S은행','100-0000-0000-002'
이과장,'3,200,000','S은행','100-0000-0000-003'
홍팀장,'3,300,000','S은행','100-0000-0000-004'
이대리,'5,300,000','S은행','100-0000-0000-005'`

let separateInp = bankInp.split('\n');
let numVal = [];

for (let i of separateInp){
  let j = i.split(',');
  let k = j.slice(1, j.length-2);
  numVal.push(k.join(''))
}

console.log(numVal);
let payOne = '';
let payTow = '';
let monthlyPayResult = [];
for (let monthlyPay of numVal){
  console.log(monthlyPay)
  for (let separatePay of monthlyPay){
    console.log(separatePay)
    if (separatePay != '\''){
      if (separatePay == 3){
        payOne += '1';
        payTow+= '2';
      } else if (separatePay == 4){
        payOne += '2';
        payTow+= '2';
      } else if (separatePay == 6){
        payOne += '1';
        payTow+= '5';
      } else {
        payOne += separatePay;
        payTow+= '0';
      }
    }
  }
  console.log(payOne);
  console.log(payTow);
  monthlyPayResult.push([parseInt(payOne, 10), parseInt(payTow, 10)]);
  payOne = '';
  payTow = '';
}
console.log(monthlyPayResult);

// ----------------------------------------------------------