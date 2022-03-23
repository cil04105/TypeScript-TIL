// 함수에 타입 지정하는 법 & void 타입
// //파라미터, return 값 타입 지정 가능
// const 함수 = (a: number): number => {
//   return a + 2;
// };
// //void 타입은 리턴을 막아줄때 사용함
// const 함수 = (a?: number): void => {
//   return a * 1;
// };
//   // 함수(); //타입 지정된 파라미터는 무조건 사용해야함, 파라미터가 옵션인 경루 파라미터 뒤에 ?(|undefined 와 같은 뜻)붙이기
// const 함수 = (a: number) => {
//   return a + 2;
// };
// 함수();
var myName = function (a) {
  console.log(a);
};
console.log(myName(3));
