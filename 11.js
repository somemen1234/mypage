var obj = {	0: 'a',	1: 'b',	2: 'c',	length: 3 };     //유사객체

var arr = Array.from(obj); // 객체 -> 배열로 바꿔줌 (ES6의 짱 좋은 기능!)
console.log(arr); // 찍어보면 배열이 출력됩니다.

var numbers = [10, 20, 3, 16, 45];

numbers.forEach(function(number, idx){                 //요렇게 파라미터를 여러 개 넣을수도 있음!
    console.log(idx + '번쨰의 값은 '+ number+'입니다.')
})


var max = min = numbers[0]; //10

// numbers.forEach(function(number) {     //대표적인 max, min을 찾아가는 과정(비효율적임!!)
//     if(number > max) {                //현재 돌아가는 숫자가 max보다 큰 경우
//         max = number;
//     }

//     if(number < min) {
//         min = number;
//     }
// })
//위에 것을 줄이기

var max = Math.max.apply(null, numbers)
var min = Math.min.call(null, ...numbers)       //간단
console.log(max, min)  

//spread operator 이용 (Math.max는 풀어 헤치는게 중요 - 콤마 형태로 구분된 숫자들의 나열로서 표현되어야 함)
// var max = Math.max(...numbers)
// var min = Math.min(...numbers)          //간단해.. 실제로 제일 많이 사용
// console.log(max, min)

