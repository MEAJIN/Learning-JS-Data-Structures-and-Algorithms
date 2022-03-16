// 피보나치 수
// 문제
// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 2 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 점화식입니다.
// 2 이상의 n이 입력되었을 때, fibonacci 함수를 제작하여 n번째 피보나치 수를 반환해 주세요.
// 예를 들어 n = 3이라면 2를 반환해주면 됩니다.

// #1 (시간초과로 프로그래머스 제출X)
// function fibonacci(num){

//   if (num < 2){
//     return num;
//   } else 
//   return fibonacci(num-1)+fibonacci(num-2);
// }

// 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log(fibonacci(3))

// #2
// let fibonacci = [];
// fibonacci[0]=0;
// fibonacci[1]=1;

// for(i=2; i<11; i++){
//   fibonacci[i]=(fibonacci[i-1]+fibonacci[i-2]);
// }

// for (i=0; i<fibonacci.length; i++){
//   console.log(fibonacci[i]);
// }

// #3
// function fibonacci(num) {
//   let a = 0, b = 1, fib = 1;

//   for (i = 2; i <= num; i++) {
//     fib = a + b;
//     a = b;
//     b = fib;
//   }
//   return fib;
// }

// 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log(fibonacci(6))