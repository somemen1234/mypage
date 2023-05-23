var func = function (a, b, c, d) {
	console.log(this, a, b, c, d);
};
func(1, 2, 3, 4); // glbal객체에 1 2 3 4찍힘

// 함수에 this 미리 적용(즉시 실행이 아닌)
var bindFunc1 = func.bind({ x: 1 }); // 바로 호출되지는 않아요! 그 외에는 같아요.
bindFunc1(5, 6, 7, 8); // { x: 1 } 5 6 7 8

// 부분 적용 함수 구현
var bindFunc2 = func.bind({ x: 1 }, 4, 5); // 4와 5를 미리 적용(선점)했음 - 원래는 4개의 인자가 필요한데 두개를 미리 적용 했기에 두 개의 인자만 필요하다!
bindFunc2(6, 7); // { x: 1 } 4 5 6 7
bindFunc2(10, 11); // { x: 1 } 4 5 10 11

//name 프로퍼티! (bind가 의미하는 한가지 추가)
//bind적용한 함수는 name 프로퍼티에 의미 있는 값을 가지고 있음(bound- 'bind의 수동태') => 추적하기가 매우 쉽다!!!!
console.log(func.name);      //func 출력
console.log(bindFunc1.name); //bound func 출력
console.log(bindFunc2.name); //bound func 출력