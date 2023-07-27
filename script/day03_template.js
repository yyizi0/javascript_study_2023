//자바스크립트 = 객체지향언어
//객체구분 > 변수생성 > 변수활용 속성, 이벤트, 메서드
//getElement 객체방법
const ulWrap = document.getElementById('wrap')
const liTag = document.getElementsByTagName('li')
const aTag = document.getElementsByTagName('a')
//querySelector 객체방법
const ulWrapQ = document.querySelector('#wrap')
const liTagQ = document.querySelectorAll('li')
const aTagQ = document.querySelectorAll('#wrap a')
const aTagQ1 = document.querySelector('#wrap a:nth-child(1)')
//변수 정상출력 확인
console.log(ulWrap, ulWrapQ, liTag) 
console.log(liTag[0], liTag[1], liTag[2], liTag[3])
console.log(liTagQ, liTagQ[0], liTagQ[1], liTagQ[2], liTagQ[3])
console.log(aTag, aTag[0], aTagQ, aTagQ[0], aTagQ1)
//---------------------------
console.log('----------------------')
console.log('li태그 변수 값은'+liTagQ[0]+'입니다!');
console.log('1+1='+(1+1))
console.log('7X4='+(7*4))
console.log(`1+1=${1+1}`)
console.log(`7X4=${7*4}`)
console.log(`li태그 변수 값은 ${liTagQ[0]}`)