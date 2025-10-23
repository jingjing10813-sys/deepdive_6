//입력한 나이에 따라 성인/미성년자 출력하기
function checkAge(name, age) {
  if (age >= 20) {
    console.log(`${age}세인 ${name}님은 성인입니다.`);
  } else {
    console.log(`${age}세인 ${name}님은 미성년자입니다.`);
  }
}

checkAge("홍길동", 24);