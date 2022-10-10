/*
# 문제 1 : 배열의 삭제
다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
*/

var nums = [100, 200, 300, 400, 500];

nums.pop();
nums.pop();

console.log(nums);


/*
# 문제2 : 배열의 내장함수
<pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

출력
[200, 100, 10000, 300]
*/

var arr = [200, 100, 300];
//pass
arr.splice(2, 0, 10000);

console.log(arr);


/*
# 문제3 : 변수의 타입
다음 출력 값으로 올바른 것은?
1)  undefined
2)  string
3)  number
4)  object
*/
var arr = [100, 200, 300];
console.log(typeof(arr)); 

// 4. object


/*
# 문제4 : 변수의 타입2
다음 변수 a를 `typeof(a)`로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?

1)  입력 : a =1,   출력 : number
2)  입력 : a = 2.22,   출력 : boolean ===> X number
3)  입력 : a = 'p',   출력 : string
4)  입력 : a = [1, 2, 3],   출력 : object
*/

// 2)  입력 : a = 2.22,   출력 : boolean


/*
# 문제5 : for문 계산
다음 코드의 출력 값으로 알맞은 것은?
1)  10
2)  12
3)  14
4)  16
*/
var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i; //두번만 순회
}

console.log(a+b); // 14 + 2

//4. 16


/*
# 문제6 : False
다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
앗, False로 취급하지 않는 것이 하나 있네요! **True를 찾아주세요.**

1)  NaN
2)  1 ===> js는 0, 빈문자열, NaN ,false, null, undefined제외 모두 참
3)  ""
4)  0
5)  undefined
*/

// 2)  1


/*
# 문제7 : 변수명
다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.
1)  age
2)  Age
3)  let
4)  _age
5)  1age
*/

// 3)  let 5)  1age


/*
# 문제8 : 객체의 키 이름 중복

자바스크립트 객체를 다음과 같이 만들었다. 
출력값을 입력하시오. (출력값은 공백을 넣지 않습니다.)
*/
var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']); // 84 키 중복일경우 마지막 값을 가져옴


/*
# 문제9 : concat을 활용한 출력 방법
다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

출력
2019/04/26 11:34:27
*/

var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

//빈칸을 채워주세요
var result = year.concat('/', month, '/', day,' ', hour,':',minute,':',second);

console.log(result);


/*
# 문제10 : 별 찍기
크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다. 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 
하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다.

입력
5

출력
    *
   ***
  *****
 *******
*********
*/

let starTree ='';
let height = 5;

for (let i = 1; i <= height; i++){
    let star = '';
    for (let j =1; j <= height-i; j++){
        star += ' ';   //공백 누적
    }
    for (let k = 1; k <= 2*i -1; k++){
        star += '*'    //*누적
    }
    // 순회 돌 때마다 개행
    starTree += star + '\n';
}

console.log(starTree);


/*
# 문제11 : for를 이용한 기본 활용

1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. `for`를 사용해야 합니다.
*/

let s = 0;

//pass
for(let i =1; i <= 100; i++) {
    s += i // i를 s에 누적
}

console.log(s);


/*
# 문제12 : 게임 캐릭터 클래스 만들기

다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
**주어진 소스 코드를 수정해선 안됩니다.**
*/

// 출력
// 545 210 10
// 파이어볼

// 데이터
// <여기에 class를 작성하세요.>

class Wizard {
    constructor (health, mana, armor){
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack(){
        console.log('파이어볼');
    }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();



/*
# 문제13 : 몇 번째 행성인가요?

우리 태양계를 이루고 있는 행성은 **수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성**으로 총 8개 입니다. 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.

입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다. 
출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.

예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.
*/

const nth = prompt('몇 번째 행성인가요?'); //입력받기

const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

console.log(planets[nth - 1]);


/*
# 문제14 : 3의 배수 인가요?

영희는 친구와 게임을 하고 있습니다. 서로 돌아가며 랜덤으로 숫자를 하나 말하고 그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다.

입력으로 랜덤한 숫자 n이 주어집니다.

만약 그 수가 **3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력**해 주세요.

입력 : 3
출력 : 짝

입력 : 2
출력 : 2
*/

const number = prompt('숫자를 말해주세요!');

if(number % 3 === 0) {
    console.log('짝');
} else {
    console.log(number);
}


/*
# 문제15 : 자기소개

신학기가 시작되고, 아이들이 돌아가면서 자기소개를 하기로 했습니다.

만약 입력으로 `김다정`이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력하게 
해주세요.

입출력

입력 : 김다정
출력 : 안녕하세요. 저는 김다정입니다.
*/

const introduce = prompt('이름을 입력해 주세요.');

console.log(`안녕하세요. 저는 ${introduce}입니다.`); // 템플릿 리터럴


/*
# 문제16 : 로꾸거

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

입출력

입력 : 거꾸로
출력 : 로꾸거
*/
const reverse = prompt('문장을 입력해 주세요.');
let result = '';

for (let i = reverse.length - 1; i >= 0; i--){ //for 거꾸로 순회
    result += reverse[i];
}
console.log(result);


/*
# 문제17 : 놀이기구 키 제한

유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.

입력으로 키가 주어지면
키가 150이 넘으면 **YES**를 틀리면 **NO**를 출력하는 프로그램을 작성하세요.
*/

const limit = prompt ('키를 입력해 주세요.');

if (limit >= 150) {
    console.log('YES');
} else {
    console.log('NO');
}

console.log(limit);


/*
# 문제18 : 평균 점수

영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

공백으로 구분하여 세 과목의 점수가 주어지면 **전체 평균 점수**를 구하는 프로그램을 작성하세요. 
**단, 소숫점 자리는 모두 버립니다.**

입력 : 20 30 40
출력 : 30
*/
const scores = prompt('점수를 입력하세요').split(' '); //공백으로 구분
let sum = 0;

for (let i = 0; i < 3; i++){
    sum += parseInt(scores[i], 10); // 10진수 숫자로 변환
}
console.log(Math.floor(sum/3)); // 소숫점자리 버림



