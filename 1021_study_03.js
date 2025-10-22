//for..of 구문을 활용한 예제를 5개 만들고 실습하세요


// 1. 음식 메뉴
const menuList = ["햄버거", "피자", "파스타", "샐러드", "스테이크"];
for (const item of menuList) {
  console.log(`오늘의 메뉴: ${item}`);
}

// 2. 부가세 매기기
const taxPrices = [12000, 25000, 8000, 15000];
for (const price of taxPrices) {
  const total = price * 1.1;
  console.log(`세금 포함 가격: ${total.toLocaleString()}원`);
}

// 3. 점수 등급 메기기
const scoreList = [98, 72, 85, 60, 100];
for (const score of scoreList) {
  let grade = "";
  if (score >= 90) grade = "A";
  else if (score >= 80) grade = "B";
  else if (score >= 70) grade = "C";
  else grade = "D";
  console.log(`${score}점 → 등급: ${grade}`);
}

// 4. 합격자 선정
const applicants1 = [
  { name: "지윤", score: 85 },
  { name: "혜수", score: 72 },
  { name: "윤지", score: 64 },
  { name: "경식", score: 91 }
];
for (const person of applicants1) {
  const result = person.score >= 80 ? "합격입니다 " : "불합격입니다 ";
  console.log(`${person.name}님은 ${result}`);
}

// 5. 영화제목과 장르
const movieList = [
  { title: "체인소맨", genre: "애니메이션" },
  { title: "범죄도시 4", genre: "액션" },
  { title: "파묘", genre: "스릴러" }
];
for (const movie of movieList) {
  console.log(`🎬 11월 화제의 개봉작 - ${movie.title} (${movie.genre})`);
}
