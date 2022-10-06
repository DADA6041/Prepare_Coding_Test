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
