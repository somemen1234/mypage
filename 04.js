// 일급 객체(First-class Object, 다른 객체들에 일반적으로 적용이 가능한 연산을 모두 지원하는 객체- 다른 객체들과 같다(매개변수전달, 리턴, 인자 들어가기 등))
// 일급객체로서의 함수!! : 변수가 되기도 하고 인자로 들어가기도 하고 return 이 되기도 함(일급 객체로서의 함수의 중요성)
// JS의 제일 큰 특징 : 함수를 매우 유연하게 사용이 가능하다!! 함수가 일급객체로 취급되기때문에
// 1. 변수에 함수를 할당 할 수 있다. (다른 프로그래밍은 말도 안되는 경우지)
// const Hello = function() {
//     console.log('hello')
// }                             //함수가 마치 값으로 취급된다 & 함수가 나중에 사용될 수 있도록 조치가 되었다!!
// 2. 함수를 인자로 다른 함수에 전달 할 수 있다. => 일급 객체이기 때문에
// 2-1. callback 함수 : 매개변수로서 쓰이는 함수(고차 함수의 한 종류-인자로 받거나의 해당하는 case이므로)
// 2-2. 고차함수 : 함수를 인자로 받거나 return 하는 함수
function callFunction(func) {
    func();
}
const Hello = function() {
    console.log('hello')
} 
callFunction(Hello); // 9번줄의 fuc로 Hello라고 저장된 함수가 전달이 됨

// line 17은 결국
// callFunction(function() {
//     console.log('hello')
// });이거 와 동일

// 3. 함수를 반환 할 수 있다. (return 자리에 함수를 넣을 수 있다)
function createAdder(num) {
    return function(x) {
        return x+num;
    }
}

const addFive = createAdder(5);       //num을 5가 대체 => const addFive = function(x) { return x+5; } 와 동일

console.log(addFive(10));
