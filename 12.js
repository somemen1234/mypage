//이전의 프로미스는 then사용
//이번에는 async - 비동기 / await - 기다리다 사용 (async/await 기법)

// coffeeMaker 함수에서 호출할 함수 addCoffee를 선언
// Promise 반환함!
var addCoffee = function (name) {
	return new Promise(function (resolve) {
		setTimeout(function(){
			resolve(name);
		}, 500);
	});
};

//★★★ 이 coffeMaker라는 함수는 function 키워드 앞에 async를 붙이면 중괄호 내의 스코프 안에 await키워드를 만난 메소드는 해당 메소드가 끝날때까지 무조건 기다려야 한다(이 메소드는 항상 프로미스를 반환해야 함)
var coffeeMaker = async function () {     // async () => {
	var coffeeList = '';
	var _addCoffee = async function (name) {
		coffeeList += (coffeeList ? ', ' : '') + await addCoffee(name);
	};

    //Promise를 반환하는 함수인 경우(전제하에), await를 만나면 순간 무조건 뒤의 메소드 실행이 끝날 때 까지 기다린다.
    //if) _addCoffee('에스프레소')요 로직이 실행되는데 100초 걸렸다면
	await _addCoffee('에스프레소');
    //console.log(coffeeList);얘는 100초 뒤에 실행이 된다.
	console.log(coffeeList);

	await _addCoffee('아메리카노');
	console.log(coffeeList);
	await _addCoffee('카페모카');
	console.log(coffeeList);
	await _addCoffee('카페라떼');
	console.log(coffeeList);
};
coffeeMaker();