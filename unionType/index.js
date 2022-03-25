// xx 또는 XX이 들어올 수 있다
//타입을 미리 정하기 애매할때 (unionType, any, unknown)
// let : number | string | boolean = 123; //union_2개 이상 합친 타입
// let member: (string | number)[] = [1, "2", 3]; //어레이 여러 타입 지정하기
// let obj: { a: string | number } = { a: 123 }; //객체
// //any type_모든 타입이 들어 갈 수 있다
// let random: any; // 편하다고 막쓰면 안됨_타입스크립트 쓰는 의미가 없음, 버그도 안잡아줌...(타입해제)
// random = 132;
// random = "132";
// random = [];
// //unknown
// let random2: unknown = 1; //any와 같은 기능(조금 더 안전함) _
// random2 - 2; //숫자는 숫자 타입이여야 연산 가능함
//연습
var user1 = "kim";
var age2 = undefined;
var married = false;
var park = [user1, age2, married];
var student = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "Lee",
};
student.score[4] = false;
student.friend = ["Kim", student.teacher];
