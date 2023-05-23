//얕은 복사
let copyObject = function (target) {              //여기서 target은 객체
    let result = {};

    for (let prop in target) {
        result[prop] = target[prop];
    }
    return result;
}

//깊은 복사(재귀 수행)
let copyObjectDeep = function(target) {
    let result = {};
    if(typeof target === 'object'&& target != null) {
        for (let prop in target) {
            result[prop] = copyObjectDeep(target[prop]);
        }
    } else {
        result = target;
    }
    return result;
}

var obj = {
	a: 1,
	b: {
		c: null,
		d: [1, 2],
	}
};
var obj2 = copyObjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj2.b.d[1] = 3;

console.log(obj);
console.log(obj2);