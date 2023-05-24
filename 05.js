//두가지 속성의 객체 (배열과 함수(매개변수가 두개))
var obj = {
	vals: [1, 2, 3],
	logValues: function(v, i) {
        if(this === global) {
            console.log('this가 글로벌')
        } else {
            console.log(this, v, i);
        }
	}
}; //global 출력!

// obj.logValues(1, 2); //메소드로의 호출은 문제가 없음
// forEach, map, filter전부 동일함! : 첫 번째 인자는 기준이 되는 배열의 n번째 요소, 두 번째 인자는 n에 대한 index
[4, 5, 6].forEach(obj.logValues);  //뒤에 obj.logValues(1, 4) =>로 매개변수까지 넣으면 매개변수로 넣는게 함수가 아닌 함수를 실행한 결과로 넣게 되는것!(콜백함수를 넣어야 한다는 건 그 함수 자체를 넣어야 한다는 것)
//=> forEach의 매개변수로 함수자체를 넣은게 아니라 메소드를 넣나 생각했을 수 있지만 이 메소드의 형태처럼 보이나 결국 function부터 시작되는 함수 자체를 넣은 것이다!!!
// = [4, 5, 6].forEach(function(v, i) {
//     if(this === global) {
//         console.log('this가 글로벌')
//     } else {
//         console.log(this, v, i);
//     }
// })
//결론 : 메소드로서의 호출이라 할때는 호출을 해야하는거지 매개 변수로 넘겨줬다해서 인식을 할 순 없다!! 모양은 메소드처럼 보였으나 결국엔 함수 자체를 전달한 것이였다(함수는 전역객체를 참조)