//this 우회하기!
var obj1 = {
	outer: function() {
		console.log(this); // (1) obj1이라는 주체로 인해 메서드 실행되었으므로 this는 outer

		// AS-IS (기존 것) - 개발에서 많이 사용하는 용어 (수정 전)
		var innerFunc1 = function() {
			console.log(this); // (2) 이것의 this는 전역객체(global)
		}
		innerFunc1();
		// TO-BE (이후 것) - 개발에서 많이 사용하는 용어 (수정 후)
		var self = this;          //스코프 내의 변수 self에 this값을 저장(obj1)
		var innerFunc2 = function() {
			console.log(self); // (3) self를 출력 // outer
		};
		innerFunc2();
	}
};
obj1.outer();

var obj = {
	outer: function() {
		console.log(this); // (1) obj(outer)
		var innerFunc = () => {          //화살표 함수를 변수로 호출함으로 thisBinding을 거치지않아 상위의 객체 obj를 바라봄(outer 부분)
			console.log(this); // (2) obj(outer) 
		};
		innerFunc();      //여기에서의 this는 당연히 전역변수여야 하지만 화살표 함수를 사용해 상위의 객체인 obj를 바라봄(화살표 함수가 아니였다면 global)
	}
}
obj.outer();
