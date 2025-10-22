//논리연산자(&&, ||, !) 3가지를 활용한 다양한 Javascript 문제 5개를 만들고, 풀이를 같이 적어주세요.
//논리연산자 활용 예제 1 - 회사에서 사용할 수 있는 상황가정

// && 활용예제
// 근무중 + 회의 참석 시 업무 진행 가능
const isWorking = true;       // 근무 여부
const inMeeting = true;       // 회의 참석 여부

const canProceed
 = (isWorking && inMeeting) && "업무 진행 중입니다 " || "회의 참석 후 진행해주세요 ";
console.log(canProceed);


// || 활용예제
// 사원증. 게스트카드 회사 출입 조건
const hasEmployeeCard = false;
const hasGuestPass = true; // 사원증이 없더라도 게스트카드가 있으면 출입 가능

const entryPermission 
= (hasEmployeeCard || hasGuestPass) && "출입이 허가되었습니다 " || "출입 불가입니다 ";
console.log(entryPermission);


// ! 활용예제
// 이메일 확인 여부
const emailChecked = false; 
// emailChecked가 false → !emailChecked true → "새로운 메일 있음" 출력
// true라면 "모든 메일 확인" 출력

const mailStatus = !emailChecked && "새로운 메일이 있습니다 " || "모든 메일을 확인했습니다 ";
console.log(mailStatus);


// ! + && 활용예제
// 회의 일정, 보고서 업무 확인
const hasMeeting = false;      // 회의 일정 여부
const reportSubmitted = false; // 보고서 제출 여부

// 두 조건이 모두 false → true로 평가되어 "일정 없음" , 하나라도 true면 "업무 예정"
const taskStatus = (!hasMeeting && !reportSubmitted) 
  ? "오늘은 일정이 없습니다 "
  : "업무가 예정되어 있습니다 ";
console.log(taskStatus);



// && + || 활용예제
// 연말 보너스 지금 조건
const performance = "A";    // 인사 평가 등급
const workMonths = 14;      // 근속 개월 수

// 1. 평가 A + 1년 이상 근속 → 보너스 지급
// 2. 평가 B 또는 6개월 이상 근속 → 부분 지급
// 3. 그 외 → 대상 아님
const bonus = (performance === "A" && workMonths >= 12)
  ? "연말 보너스 지급 대상입니다 "
  : (performance === "B" || workMonths >= 6)
    ? "부분 보너스 지급 대상입니다 "
    : "보너스 지급 대상이 아닙니다 ";
console.log(bonus);

