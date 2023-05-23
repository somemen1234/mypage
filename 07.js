var obj1 = {
	outer: function() {
		console.log('TEST =>', this); //맨처음으로 찍힌 this 호출의 주체인 obj1이 찍힘
		var innerFunc = function() {
			console.log('TEST =>', this); // 여기는 함수로서의 호출(innerFunc는 앞에 객체를 가리키고 있지 않기에)이므로 global 객체에 해당!
		}
		innerFunc(); // (2) 호출(함수로써의 호출) - 함수 내부에 있더라도 예외가 없다!!!!!

		var obj2 = {
			innerMethod: innerFunc
		};
		obj2.innerMethod(); // (3) 호출(객체의 메서드로서의 호출) - obj2를 가리킴
	}
};
obj1.outer(); // (1) 호출(객체의 메서드로써)