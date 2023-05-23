// 아래 코드를 여러분이 직접 call stack을 그려가며 scope 관점에서 변수에 접근해보세요!
// 어려우신 분들은 강의를 한번 더 돌려보시기를 권장드려요 :)
var a = 1;
var outer = function() {
	var inner = function() {
		console.log(a); // 이 값은 뭐가 나올지 예상해보세요! 이유는 뭐죠? scope 관점에서!
		var a = 3;
	};
	inner();
	console.log(a); // 이 값은 또 뭐가 나올까요? 이유는요? scope 관점에서!
};
outer();
console.log(a); // 이 값은 뭐가 나올까요? 마찬가지로 이유도!

// =>코드 실행 시, 콜스택에 전역변수 들어가고 outer()들어가고 inner()들어간다음에 차례로 inner()부터 실행.
// var a =1;
// var outer = function() {
//     var inner = function() {
//         var a;                //undefined -> 여기서의 a는 inner의 내부스코프에서 해결한 것
//         console.log(a);
//         a=3;
//     }
//     inner();             //1. inner()가 실행 후에 끝나고 콜스택에서 빠져 나옴(콜스택에 없음!)
//     console.log(a);      //=1 출력 / inner()의 a를 찍을수 없음 why? 이미 콜스택에서 빠져 나왔기 때문 따라서 참조할수 있는 a는 밖에서 밖에 못가져옴(전역변수에서만 가져올수 있음 outer()가 불리는 곳인 전역변수)
// };
// outer();                 //2. outer() 함수 실행해서 함수내부의 console.log실행(이때의 outer는 선언될 당시의 LE(전역변수)를 가지고 있음)& 실행 후 콜스택에서 빠져 나감
// console.log(a);          //3. 내부에 있는 지역변수 a에 1을 받아오므로 1이 출력