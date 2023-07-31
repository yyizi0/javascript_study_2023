//배열과 객체
const a = 1 //상수(변하지않는 값)
//a = 2 //error (상수값을 변경하는 시도가 있을 시 에러발생)
let b = 2//변수(변할 수 있는 값)
b += 4;//새로운 값이 대입될 경우 기존값 2가 제거되고 4로 새로 대입
console.log(b)

//서로 연관된 데이터 2개 이상을 배열로 담을 수 있다.
const yoil = ['일','월','화','수','목','금','토']
console.log(yoil)
console.log(`오늘은 ${yoil[1]}요일입니다!`)

const colorArray = ['white','black','yellow','pink','red']
const weatherArray = ['흐림','맑음','눈','태풍','비']
let color = document.querySelector('.color')
let weather = document.querySelector('.weather')
console.log(color,weather)
color.innerHTML = colorArray[3]+', '+colorArray[4]
weather.innerHTML = `${weatherArray[0]}입니다.`

//사이즈, 색상과 같은 연관되지 않은 데이터를 연속된 배열에 묶어선 안된다.
let optionArray = new Array(4) //빈 배열 4 준비
console.log(optionArray) //empty*4
optionArray[0] = 'white'
optionArray[2] = 'M'
console.log(optionArray)