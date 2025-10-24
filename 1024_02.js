//문제 1 ) 홀수만 출력하기
const numbers = [32, 20, 5, 12, 0, 45];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
}
    
//문제 2) str 변수의 길이를 출력하기
const str = 'Hello, World';
console.log(str.length);

//문제 3) numbers의 변수안의 모든 값을 더한 총합을 출력하기
const numbers1 = [32, 20, 5, 12, 0, 45];

let sum = 0; 
for (let i = 0; i < numbers1.length; i++) {
  sum += numbers1[i]; 
}

console.log(sum);

//문제 4)numbers 변수안의 값중에 20이상의 숫자의 개수를 출력하기
const numbers3 = [32, 20, 5, 12, 0, 45];

let count = 0; 

for (let i = 0; i < numbers3.length; i++) {
  if (numbers3[i] >= 20) {
    count++;
  }
}

console.log(count);
