var n = null;
console.log(typeof n); // object

//동등연산자(equality operator)
console.log(n == undefined); // true
console.log(n == null); // true

//일치연산자(identity operator)
console.log(n === undefined);
console.log(n === null);

//얕은 복사
var copyObject = function (target) {
	var result = {};

	// for ~ in 구문을 이용하여, 객체의 모든 프로퍼티에 접근할 수 있습니다.
	// 하드코딩을 하지 않아도 괜찮아요.
	// 이 copyObject로 복사를 한 다음, 복사를 완료한 객체의 프로퍼티를 변경하면
	// 되겠죠!?
	for (var prop in target) {
		result[prop] = target[prop];
	}
	return result;
}
var user = {
	name: 'wonjang',
	gender: 'male',
};

var user2 = copyObject(user);
user2.name = 'twojang';

if (user !== user2) {
	console.log('유저 정보가 변경되었습니다.');
}

console.log(user.name, user2.name);
console.log(user === user2);

//깊은 복사
var copyObjectDeep = function(target) {
	var result = {};
	if (typeof target === 'object' && target !== null) {
		for (var prop in target) {
			result[prop] = copyObjectDeep(target[prop]);
		}
	} else {
		result = target;
	}
	return result;
}