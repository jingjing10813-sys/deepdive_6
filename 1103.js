// 공배수 구하기

function getNumber(num, x) {
  if (num % x === 0) {
    console.log('공배수');
  } else {
    console.log('공배수 아님');
  }
}

getNumber(60, 3) //뒤에 있는 x가 앞에있는 num의 공배수이면 '공배수'출력,아니면 '공배수 아님' 출력
getNumber(60, 7)