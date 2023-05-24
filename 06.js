//콜백함수 내부의 this에 다른 값 바인딩 하기!
//closure 방식 : 현재 함수가 끝났음에도 불구하고 영향력을 끼침(self부분 - 참조하고 있는 함수 영역은 안에 부분인데 안에 쓰는 self 변수는 바깥쪽에서 있는 self변수를 참조하고 있다.)
//callback 함수 내부의 this에 다른 값을 바인딩 - 전통적 방법 : self

// var obj1 = {
// 	name: 'obj1',
// 	func: function() {
// 		var self = this; //이 부분!
// 		return function () {
// 			console.log(self.name);
// 		};
// 	}
// };

// // 단순히 함수만 전달한 것이기 때문에, obj1 객체와는 상관이 없어요.
// // 메서드가 아닌 함수로서 호출한 것과 동일하죠.
// var callback = obj1.func();
// setTimeout(callback, 1000);

//=>그렇다면 콜백 함수 내부에서 아예 this를 사용하지 않는 다면?
// var obj1 = {
// 	name: 'obj1',
// 	func: function () {
// 		console.log(obj1.name);
// 	}
// };
// setTimeout(obj1.func, 1000);  //위와 동일하게 동작 , 결과만을 위한 코딩 => 10점짜리 하드코딩... 100점 만점의 10점짜리 코딩


// obj1의 func를 직접 아래에 대입해보면 조금 더 보기 쉽습니다!
var obj2 = {
	name: 'obj2',
	func: obj1.func
};
// var callback2 = obj2.func();
// setTimeout(callback2, 1500);

// 역시, obj1의 func를 직접 아래에 대입해보면 조금 더 보기 쉽습니다!
var obj3 = { name: 'obj3' };
var callback3 = obj1.func.call(obj3); //즉시 실행하게끔 call로 this바인딩
setTimeout(callback3, 2000);