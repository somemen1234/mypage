//콜백 함수 ex1)
setTimeout(function() {
    console.log('hello')
}, 1000)                  // millisecond 1000 => 1초, 1초후에 hello를 출력하는 setTimeout 

//콜백 함수 ex2)
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number)
});                                  //반복문