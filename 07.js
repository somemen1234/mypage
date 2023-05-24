//bind - 함수를 만들어놓을 떄 유용 , 가장 좋은 방법임!!!!!!
var obj1 = {
	name: 'obj1',
	func: function () {
		console.log(this.name);
	}
};

let boundObj1 = obj1.func.bind(obj1);
setTimeout(boundObj1, 1000); //obj1이 객체로 묶이면서 여기의 this는 obj1

let obj2 = { name : 'obj2'};
setTimeout(obj1.func.bind(obj2), 1500); //어떤 this든 원하는 대로 bind 할 수 있다