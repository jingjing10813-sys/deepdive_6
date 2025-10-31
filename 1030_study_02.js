//퀴즈 1 두수의 차이구하기
function getDiff(a, b) {
  return Math.abs(a - b);
}

console.log(getDiff(5, 10)); 
console.log(getDiff(10, 3)); 

//퀴즈 2 만나이 구하기
function getAge(birthYear) {
  const currentYear = new Date().getFullYear(); // 현재 연도 자동 가져오기
  const age = currentYear - birthYear; 
  console.log(`${age}세`);
}

getAge(2001); 

//퀴즈 3 몫 구하기
function getQuotient(a, b) {
  const result = Math.floor(a / b); 
  console.log(result);
}

getQuotient(15, 7); 

//퀴즈 4-1 배열의 평균값 구하기 reduce()
function getAverage(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0); 
  const avg = sum / arr.length; 
  console.log(avg);
}

const numbers = [3, 5, 10, 2, 6, 7, 9];
getAverage(numbers); 

//퀴즈 4-2 배열의 평균값 구하기 for 문
function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
  }
  const avg = sum / arr.length; // 총합 ÷ 개수
  console.log(avg);
}

const numbers1 = [3, 5, 10, 2, 6, 7, 9];
getAverage(numbers); 
