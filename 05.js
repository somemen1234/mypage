//일급 객체로서의 함수(2)

const person = { name : 'John', age : 31, isMarried : true, sayHello : function() { console.log(`hello, my name is ${this.name}`) }}
// const person = { name : 'John', age : 31, isMarried : true, sayHello : () => { console.log(`hello, my name is ${this.name}`) }} // 얘는 name이 undefined로 나옴!!(화살표함수는 this를 바인딩 하지 않는다!)

person.sayHello();