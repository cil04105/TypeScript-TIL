// type MyType = string | number; // 타입 지정: 문자 또는 넘버, 타입 변수명은 대문자로 작성
// let myName: myType = 123;

// tuple 타입
// type Member = [number, boolean]; // 무조건 천 째는 number, 둘 째는 boolean
// let arr: Member = [4, true];

// // 함수 파라미터에도 사용 가능
// const handle = (x: number) => {
//   return x * 2;
// };
// handle(2);

//-객체
// type Member = {
//   name: string;
// };

// let peter: Member = { name: "fdf" };

// // 객체가 많아지면?
// type Member = {
//   [key: string]: string; //모든 객체 속성이 전부 string을 가져야한다
// };

// let peter: Member = { name: "fdf" };
