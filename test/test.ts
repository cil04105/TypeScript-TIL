//void는 실수로 리턴하는거 막아줌
//? = number|undefined
//유니온 타입은 연산 불가능, 타입 확실히 지정
// function hamsu(x?: number | string): void {
//   if(x:number)
//   console.log(x + 3);
// }
// hamsu(2);

function hello(nam: string): void {
  if (nam) {
    console.log("hi" + nam);
  } else {
    console.log("누구?");
  }
}
hello("Park");

function num123(x: string | number): number {
  return x.toString.length;
}
num123("2222");

function marry(money: number, house: boolean, charm: string) {
  let score: number = 0;
  score += money;
  if (house === true) {
    score += 500;
  }
  if (charm === "상") {
    score += 100;
  }
  if (score >= 600) {
    return "gogogogo";
  } else {
    return "gg";
  }
}
