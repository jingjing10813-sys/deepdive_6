const a = 13;
const b = 5;

const sum = a + b; /* a와 b를 더한값 */
const isEven = a % 2; /* a값이 짝수인지, 짝수려면 true, 홀수려면 false */

console.log(sum);
console.log(isEven);

function calcsum(x,y) {
    const result = x + y;
    console.log(result);
}

calcsum(3, 5);
calcsum(a, b);
calcsum(10, 15);



function createIcecream(syrup, topping) {
    const result = `${syrup} ${topping} 아이스크림이 만들어 졌습니다.`
    console.log(result);
}

createIcecream('choco', 'amond');
createIcecream('vanila', 'pinnut');






