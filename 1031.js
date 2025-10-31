//함수선언식, 함수표현식
// 1. sum()함수(두수의 합을 반환)를 함수 선언식으로 만드시오.
// 2. div()함수(두수의 나눈값의 몫을 반환)를 함수 표현식으로 만드시오(function사용)
// 3. remainer() 함수(두수의 나눈값의 나머지값을 반환)를 함수 표현식으로 만드세요 (arrow function 사용)

// 1. 함수 선언식 - 두 수의 합 반환
function sum(a, b) {
  return a + b;
}

console.log(sum(3, 5)); 

// 2. 함수 표현식 - 두 수의 나눈 몫 반환
const div = function(a, b) {
  return Math.floor(a / b); 
};

console.log(div(10, 3)); // 3


// 3. 화살표 함수 표현식 - 두 수의 나눈 나머지 반환
const remainder = (a, b) => a % b;

console.log(remainder(10, 3)); 
