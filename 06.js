//메소드 호출 시의 this가 가르키는 값(객체)
var obj = {
	methodA: function () { console.log(this) },
	inner: {
		methodB: function() { console.log(this) },
	}
};

// obj.methodA();             // this === obj
// obj['methodA']();          // this === obj

obj.inner.methodB();       // this === obj.inner
obj.inner['methodB']();    // this === obj.inner
obj['inner'].methodB();    // this === obj.inner
obj['inner']['methodB'](); // this === obj.inner