//ES6문법 : 2015에 발표된 JS버전 중 하나(15년에 대규모 문법적 향상 및 변경이 있었기에 언급이 됨(let, const, 화살표 등)

//2015 이후 많은 기능 들어옴
// 1) let, const : let은 재 할당 가능, const는 재 할당x (호이스팅으로 인한 var 문제 해결 방안)

// 2) arrow function : 기존 함수 호출은 function add() {}; / var add = function() {}; 에서 let add = (x) => { return 1;}; => let add = x => 1;

// 3) 삼항 연산자 : condition ? result1 : result2 => condition이 참이면 result1 값 대입, 거짓이면 result2 값 대입함.

// console.log(true ? "참" : "거짓");

// console.log(false ? "참" : "거짓");

// console.log(1 === 1 ? "참" : "거짓");

// console.log(1 !== 1 ? "참" : "거짓");

// console.log(Boolean(1));
function Person(name, age, gender) { 
    this.name = name;
    this.age = age;
    this.gender = gender;
}
let person1 = new Person('성민', 30 , '남자');

let numbers = [1, 2, 3, 4, 5]
numbers.forEach(function(item) {
    console.log(item+1)
});

console.log(numbers)
let newNumber = numbers.filter(function(item) { return item === 5}); 
console.log(newNumber)