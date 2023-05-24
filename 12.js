//클로저는 매우중요!, 어떤 상황에서 사용? 상태를 안전하게 은닉하기(변경하고 유지하기) 위해 사용

// 카운트 상태 변경 함수 #1
// 함수가 호출될 때마다 호출된 횟수를 누적하여 출력하는 카운터를 구현해요!

// 카운트 상태 변수
// let num = 0; //변수가 은닉되지 않았기에 위험이 있음 why? 아래 주석과 같이

// // 카운트 상태 변경 함수
// const increase = function () {
//     // 카운트 상태를 1만큼 증가시킨다.
//     return ++num;
// };

// console.log(increase());
// // num = 100; // 요렇게 중간에 누가 들어와버리면 바뀌어 버리는 너무 너무 치명적인 단점이 있어요.
// console.log(increase());
// console.log(increase());

//보완 사항 : 1. 카운트 상태(num 변수 값) => increase함수 호출 전까지는 변경되면 안된다!(중간에 number가 변경이 되면 문제가 되니)
//2. count 상태(num 변수)는 오직 increase 함수만이 변경해야 함!!
//3. 전역변수 num 요놈이 문제다 -> 지역변수로 해볼까?

//변경
// const increase = function () {
//     let num = 0;
//     return ++num;
// };

// console.log(increase()); //1
// console.log(increase()); //1
// console.log(increase()); //1
//[리뷰] : 1. num변수를 increase 함수의 지역변수로 선언함 (변경을 방지함으로 num변수는 오직 increase함수만 변경가능)
//2. but) increase()가 호출될 때마다 num이 초기화(출력값은 언제나 1)
//*의도치 않은 변경 방지하면서 이전 상태를 유지해야 함 -> 결론 : 클로저를 이용!!!!!!!!!!


//변경(클로저 적용)
const increase = (function () {
    let num = 0;

    return function() {
    return ++num;
    };                //increase는 요놈이다 -> 얘는 항상 외부 함수를 참조하고 있기 때문에!! 가비지 컬렉터가 가져가지 않음
})();

console.log(increase()); //1
console.log(increase()); //2
console.log(increase()); //3
//설명 : 1. 위 코드 실행되면 '즉시 실행 함수'가 호출(increse = 에서 (function(){ let num=0; ~~})부분) -> 함수가 반환(inner)이 됨 ->increase에 할당됨
//2. increase변수에 할당된 함수는 자신이 정의된 위치에 의해서 결정된 상위 스코프인 즉시 실행 함수의 '렉시컬 환경'을 기억하는 클로저 --> let num = 0;을 기억한다.
//3. 즉시 실행 함수는 즉시 소멸 됨(outer함수가 불리고 바로 callstack에서 popUp되는 것과 비슷함)
//*결론 : num은 초기화가 되지 않았고 외부에서 접근할 수 없는 은닉된 값이 되었음(의도되지 않은 변경도 걱정 x) =>increase에서만 num을 변경할 수 있기 때문!