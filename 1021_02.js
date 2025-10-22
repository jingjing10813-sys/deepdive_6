const animals = ["cat", "dog", "puppy", "elephant", "rabbit"];

console.log (animals[2]);

//for (const animal of animals) {
   // console.log(animal);
//}

for (let i = 0; i < 5; i++) {
    console.log(`${i + 1}. ${animals[i]}`);
}

/*
for (초기화 ; 조건식 ; 증강식) {
실행문
}
*/

// 0부터 5까지 출력하겠다.

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

let a = 1;
a = a + 1; //2
a = a + 1; //3

a += 1 //4
a += 1 //5

