// for 반복문을 활용한 예제 5개


// 1. 과일 목록
const fruits1 = ["사과", "바나나", "딸기", "포도"];

for (let i = 0; i < fruits1.length; i++) {
  console.log(`${i + 1}번째 과일: ${fruits1[i]}`);
}

// 2. 글자 수 계산
const fruits2 = ["apple", "banana", "kiwi", "grape"];

for (let i = 0; i < fruits2.length; i++) {
  console.log(`${fruits2[i]}의 글자 수는 ${fruits2[i].length}입니다`);
}

// 3. 구구단 3단
for (let i = 1; i <= 9; i++) {
  console.log(`3 x ${i} = ${3 * i}`);
}

// 4. 5의 배수만 출력
for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log(`${i}는 5의 배수입니다`);
  }
}

// 5. 숫자 계산 (합계, 평균)
const numbers = [12, 25, 38, 49, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(`합계: ${sum}`);
console.log(`평균: ${(sum / numbers.length).toFixed(2)}`);