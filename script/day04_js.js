//null, undegined 데이터타입 차이
let a = 10;
console.log(a)
//-------------------------
//undefined 정의되지 않은 상태
let b = 10;
let c 
console.log(b, c)
console.log(b+c)
console.log('-------------------------------')
let num1 = 10;
num1++;
console.log(num1);//11
num1--;
console.log(num1);//10
console.log(++num1);
console.log(num1);
/* 출력 또는 대입 연산자와 함께 할때 
전위, 후위 연산자에 따른 결과값이 다르게 출력된다.
출력예) console.log(num1++)
콘솔 로그로 기존 num1의 값을 먼저 전송출력 후 
++ 증감연산자로 num1의 값을 나중에 1증가한다.
개별예) num1--
출력, 대입 관계없이 증감연산자를 개별로 작성한 경우
전위, 후위 연산과 관계없이 무조건 1증가 또는 1감소된다. */
let num2 = 5;
let num3 = 0;
console.log(`초기값 num2=${num2}, num3=${num3}`)
num3 = num2++
console.log(`num2=${num2}, num3=${num3}`)
num3 = ++num2
console.log(`num2=${num2}, num3=${num3}`)
console.log('-----------------------------')
let number1=10;
let number2=20;
let result;
number1--;
console.log(number1); //결과: 9
number1++;
console.log(number1); //결과: 10
result=number2++;
console.log(result); //결과: 20
result=++number2;
console.log(result); //결과: 22