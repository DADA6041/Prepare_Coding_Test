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
