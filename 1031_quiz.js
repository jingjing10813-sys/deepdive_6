const users = [149,180,192,170] ; //키
const ghost = 167 ; //ghost 키

//ghost 보다 큰 user가 몇명인지 구하시오
//"ghost보다 키가 큰 사람은 총 3명입니다."

let count = 0;

for (let i = 0; i < users.length; i++) {
  if (users[i] > ghost) {
    count++;
  }
}

console.log(`ghost보다 키가 큰 사람은 총 ${count}명입니다.`);