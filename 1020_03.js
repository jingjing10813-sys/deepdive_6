//삼합연산자
//1 ? 2 : 3
//조건식 ? 참일때 실행문 : 거짓말일때 실행문




const a = 5;
const result = a%2 === 0 ? "짝수" : "홀수";
console.log(result);

const b = 10;
const result2 = b > 10 ? "b는 10보다 크다" : "b는 10보다 작다";
console.log(result2);

// 내가 입력한 수가 10보다 큰지 매번 판별

function overTen(number) {
    const isOver = number >10 ? `${number} : 10보다 크다` : `${number} : 10보다 작다`;
    console.log(isOver)
}
overTen(13);
overTen(3);
overTen(5);
overTen(-1);



function getRectArea(width, height) {
    const result = width * height;
    console.log(`사각형의 크기는 ${result}입니다`);
}
getRectArea(10, 5);


function isAdult(name, age) {
    const result = age >= 20 
        ? `${name}님은 성인입니다.` 
        : `${name}님은 미성년자입니다.`;
    console.log(result);
}

isAdult("홍길동", 25);



function getAverage(a, b, c) {
    const result = (a + b + c) / 3;
    console.log(`당신의 평균점수는 ${result}입니다.`);
}

getAverage(90, 80, 70);


const id = "ghost";
const pw = "1234";
function checkLogin(userid, userpw) {
    const result = userid === id && userpw === pw ? "로그인 성공" : "로그인 실패" ;
    console.log(result);

}

checkLogin("hello, 1234")
checkLogin("ghost, 1234")