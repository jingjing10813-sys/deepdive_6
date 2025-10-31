// 배열(Array) 예시
const fruits = ['사과', '바나나', '오렌지'];

// forEach()로 배열 반복
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}번째 과일: ${fruit}`);
});



// 학생 점수 배열
const scores = [85, 92, 78, 100, 67];

// forEach()로 각 점수 출력
scores.forEach((score, index) => {
  console.log(`${index + 1}번째 학생 점수: ${score}`);
  
  if (score >= 90) {
    console.log(' 우수한 성적입니다!');
  } else if (score < 70) {
    console.log(' 보충 필요!');
  }
});
