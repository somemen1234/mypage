//remind : 비동기 작업을 동기적으로 표현하는 이유는 순서를 보장할 수 없으니 순서가 필요한 로직에서 동기적인 표현으로 나타내 순서를 보장 받기 위해서
//비동기 작업의 동기적 표현 - generator
//iterable : 반복된다!!라고 이해하기 , iterator 객체는 next메소드를 가지고 있음 -> 이 메소드로 자기 자신의 요소들을 계속해서 순환할수 있음 (하나하나 순환하며 작업을 수행하는 데 용이) 
//generator : 반복할수 있는 iterator객체를 생성한다~ - yield가 같이 따라옴 // 비동기작업이 완료되는 시점마다 next메소드를 호출해주면 순차적으로 수행이 된다~

//1.제너레이터 함수 안에서 쓸 addCoffee 함수 선언
var addCoffee = function (prevName, name) {
	setTimeout(function () {
		coffeeMaker.next(prevName ? prevName + ', ' + name : name);
	}, 500);
};

//2.제너레이터 함수 선언
//yield 키워드로 순서를 제어 함.
var coffeeGenerator = function* () {                   //*가 붙은 함수가 제너레이터 함수다! 이 함수를 실행하면 iterator객체가 반환이 된다. (next메소드로 계속 순환가능)
	var espresso = yield addCoffee('', '에스프레소');        //yield메소드를 만나면 멈춘! - 뒤의 addCoffee가 완료 될때까지 기다린 후에 다음으로 넘어감 (addCoffee에 next가 있기 때문)
	console.log(espresso);
	var americano = yield addCoffee(espresso, '아메리카노');
	console.log(americano);                               //고럼 요기 americano에 에스프레소, 아메리카노가 담김
	var mocha = yield addCoffee(americano, '카페모카');    //따라서 여기 americano는 에스프레소, 아메리카노 이다.
	console.log(mocha);
	var latte = yield addCoffee(mocha, '카페라떼');
	console.log(latte);
};
var coffeeMaker = coffeeGenerator();      //얘는 iterator객체가 된다.
coffeeMaker.next();