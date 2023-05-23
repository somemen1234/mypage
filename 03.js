var a = 1;
function outer() {
	function inner() {
		console.log(a); //undefined
		var a = 3;      //함수 내부에 a가 선언되었는데 출력 후 선언이여서 undefined가 출력(이부분 지우면 전역변수를 받아 1출력이 됨!) - let으로 바꾸면 오류가 됨(애초에 이게 말이 안됨)
	}
	inner(); // ---- 2번
	console.log(a);
}
outer(); // ---- 3번
console.log(a);

