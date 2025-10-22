//논리연산자(&&, ||, !) 3가지를 활용한 다양한 Javascript 문제 5개를 만들고, 풀이를 같이 적어주세요.
//논리연산자 활용 예제 1 - 쇼핑몰에서 사용할 수 있는 상황가정

// && 활용예제
// 알람설정 여부 상황
const isNotificationOn = false;

const alarmStatus 
= !isNotificationOn && "알림이 꺼져 있습니다 " || "알림이 켜져 있습니다 ";
console.log(alarmStatus);

// && 활용예제
// 쿠폰이 있고 결제금액이 충족해야 쿠폰 사용가능 조건 
const hasCoupon = true;
const minPurchase = 50000; // 최소 결제 금액
const totalPrice = 60000;

const couponResult 
= (hasCoupon && totalPrice >= minPurchase) && "쿠폰 적용 완료 " || "쿠폰 적용 불가 ";
console.log(couponResult);


// || 활용예제
// 회원이거나 쿠폰이 있으면 무료배송 쿠폰 혜택
const isMember = false;
const guestCoupon = true; // 회원이 아니더라도 게스트 쿠폰이 있으면 무료 배송

const benefit 
= (isMember || guestCoupon) && "무료 배송 혜택 적용 " || "배송비 3,000원 부과 ";
console.log(benefit);


// ! + || 활용예제
// 결제수단 등록 확인
const hasCardInfo = false;
const hasKakaoPay = false;

const paymentCheck = (!hasCardInfo && !hasKakaoPay) 
  ? "결제 수단을 등록해주세요 " 
  : "결제 준비 완료 ";
console.log(paymentCheck);


// && + || 활용예제
// 앱 구독자에 한해 세일 정보 알림 등록
const isSubscribed = true;   // 구독 여부
const isAppUser = false;     // 앱 사용자 여부

const saleNotice = (isSubscribed && isAppUser) 
  ? "앱 푸시 세일 알림이 전송됩니다 " 
  : (isSubscribed || isAppUser) 
    ? "이메일로 세일 정보가 전송됩니다 " 
    : "세일 알림을 받지 못합니다 ";

console.log(saleNotice);

