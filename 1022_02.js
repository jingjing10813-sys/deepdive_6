const math = 80;

let result = math >= 65 ? "Pass" : "Fail";

console.log(`Math : ${result}`);

const eng = 45;

if(eng >= 65) {
    result = 'Pass';
} else {
    result = "Fail";
}

console.log(`English : ${result}`);


const average = (math + eng) / 2;
// 평균점수가 90점이상이면 'A', 80점이상이면 'B', 그 미만일경우 'F'

if( average >= 90) {
    result = 'A'
} else if(average >= 80) {
    result = 'B'
} else if(average >= 70) {
    result = 'C'
} else {
    result = 'F'
}
console.log(`최종학점 : ${result}`);

