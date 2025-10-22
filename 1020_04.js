// mission 1 사각형의 너비를 구하는 함수를 만드세요(가로, 세로 길이 입력받기)
// 함수명 : getRectArea 결과 : 사각형의 크기는 \___\_ 입니다.

function getRectArea(width, height) {
  const area = width * height;
  console.log(`사각형의 크기는 ${area}입니다.`);
}

getRectArea(10, 5);  
getRectArea(7, 3);   

// mission 2 학생의 성적표를 받아서, 평균을 구하는 함수를 만드세요.(국어,영어,수학)
// 함수명 : getAverage 결과 : 당신의 평균점수는 \___\_ 입니다. (a+b+c)/3

function getAverage(kor, eng, math) {
  const average = (kor + eng + math) / 3;
  console.log(`당신의 평균점수는 ${average}입니다.`);
}

getAverage(80, 90, 100); 
getAverage(70, 85, 95);  


// mission 3  반지름을 입력받아 원의 넓이를 구하는 함수를 만드세요
// 함수명 : getCircleArea 결과 : 반지름이 x인 원의 넓이는 z 입니다.


function getCircleArea(radius) {
  const area = Math.PI * (radius ** 2); // π * r² (Math.PI와 제곱연산자 사용)
  console.log(`반지름이 ${radius}인 원의 넓이는 ${area}입니다.`);
}


getCircleArea(5);  
getCircleArea(10); 


// mission 4  원래가격과 할인율을 입력하면, 최종 판매가격을 구하는 함수를 만드세요
// 함수명 : calcDiscount 결과 : 원래가격 x원에서 y%할인되어, 최종가격은 z 원 입니다.

function calcDiscount(price, discount) {
  const finalPrice = price - (price * (discount / 100));
  console.log
  (`원래가격 ${price}원에서 ${discount}% 할인되어, 최종가격은 ${finalPrice}원 입니다.`);
}

calcDiscount(10000, 20); 
calcDiscount(50000, 15); 

// mission 5 두수를 입력받아, 나눈 나머지값을 구하는 함수를 만드세요
// 함수명 : getRemainder 결과 : x를 y로 나눈 나머지는 z 입니다.

function getRemainder(x, y) {
  const remainder = x % y;
  console.log(`${x}를 ${y}로 나눈 나머지는 ${remainder}입니다.`);
}

getRemainder(10, 3);  
getRemainder(25, 4); 

// mission 6 사각형의 둘레를 구하는 함수를 만드세요(가로, 세로 입력받기)
// 함수명 : getRectPerimeter 결과 : 가로 X cm, 세로 Y cm인 사각형의 둘레는 Z cm 입니다.

function getRectPerimeter(width, height) {
  const perimeter = 2 * (width + height); 
  console.log(`가로 ${width}cm, 세로 ${height}cm인 사각형의 둘레는 ${perimeter}cm 입니다.`);
}

getRectPerimeter(10, 5); 
getRectPerimeter(8, 3); 

// mission 7 시험점수를 입력받아 60점 이상은 합격, 아니면 불합격 여부를 판단하는 함수를 만드세요
// 함수명 : checkPass 결과 : x 점은 z 입니다. ->  z는 합격,또는 불합격 값

function checkPass(score) {
  const result = score >= 60 ? "합격" : "불합격";
  console.log(`${score}점은 ${result}입니다.`);
}

checkPass(85); 
checkPass(40); 

// mission 8 이벤트 참여가능여부를 판단하는 함수(20세 이상이며, 서울에 거주하는 사람대상 판별)
// 함수명 : canJoinEvent 결과 : x세, y거주자인 당신은 '이벤트 참여가 가능(또는 불가능) 합니다. 
// 힌트 : 논리연산자(&&,||,! 사용)

function canJoinEvent(age, city) {
  const isJoin = age >= 20 && city === "서울";
  console.log(
    `${age}세, ${city} 거주자인 당신은 이벤트 참여가 ` +
    ((isJoin && "가능합니다.") || "불가능합니다.")
  );
}

canJoinEvent(25, "서울");  
canJoinEvent(19, "서울");  
canJoinEvent(30, "부산"); 

// mission 9 영화관람여부를 판단하는 함수를 만들어보세요
// 조건 : 15세 이상이어야하며, 부모동반이어야 관람가능 
// 함수명 : canWatchMovie 결과 : 나이 x 세, 보호자동반(y)는 z 입니다. (z -> ; 관람가능 또는 관람 불가) 
// 힌트 : 나이와 보호자 동반여부를 입력받아서 판별해야합니다.


function canWatchMovie(age, withParent) {
  const canWatch = age >= 15 && withParent; 
  const parentText = withParent && "있으니" || "없으므로"; 

  console.log(
    `나이 ${age}세, 보호자동반이 ${parentText} ${canWatch && "관람 가능합니다." || "관람 불가입니다."}`
  );
}

canWatchMovie(16, true);   
canWatchMovie(14, true);   
canWatchMovie(17, false);  


// mission 10 요일을 입력받아, 주말여부를 판별하는 함수를 만들어보세요
// 함수명 : isWeekend 결과 : 입력하신 x 요일은 z 입니다. ( z-> 평일 또는 주말 )

function isWeekend(day) {
  const weekend = (day === "토요일" || day === "일요일");
  console.log(`입력하신 ${day}은 ${weekend && "주말입니다." || "평일입니다."}`);
}

isWeekend("월요일"); 
isWeekend("토요일"); 
isWeekend("일요일"); 
