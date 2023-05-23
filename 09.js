var func = function (a, b, c) {
	console.log(this, a, b, c);
};

// no binding - global을 바라보고 있다.
func(1, 2, 3); // global{ ... } 1 2 3

// 명시적 binding // func 안에 this에는 {x: 1}이 binding
func.call({ x: 1 }, 4, 5, 6); // { x: 1 }(this하고 싶은 객체를 여기에 적음) 4 5 6

//호출 주체가 있는 메소드
var obj = {
	a: 1,
	method: function (x, y) {
		console.log(this.a, x, y);
	}
};
obj.method(2, 3); // obj에 의해서 호출되기에 호출이 명확(여기서의 this는 항상 obj임!)
obj.method.call({ a: 4 }, 5, 6); // 4 5 6 항상 obj라도 명시적으로 this를 바인딩 할 수가 있다!


//유사배열 객체 - 배열처럼 .push() / .slice()등의 실제 배열 메서드 사용할 수 없다 
//하지만 배열처럼은 call,apply(즉시 실행 함수이기 때문에 즉시 실행해주면서 this binding을 하는자리에 해당 배열의 유사객체를 넣어줌으로써) 등을 통해 사용할 수가 있다!!!
//원래의 목적에서는 벗어난 것임 / ES6에서 Array.from 기능이 제공됨 => 요것은 var arr = Array.from(obj-유사배열객체)를 해주면 객체로 바꿔줌!(위에꺼 안쓰쥬)
var obj = {
	0: 'a',
	1: 'b',
	2: 'c',
	length: 3
};
// 객체 -> 배열로 바꿔줌 (ES6의 짱 좋은 기능!)
var arr = Array.from(obj);

// 찍어보면 배열이 출력됩니다.
console.log(arr);