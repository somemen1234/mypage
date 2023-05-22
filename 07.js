function multiplyBy(num) {
    return function(x) {
        return x *num;
    };
}
function add(x, y) {
    return x + y;
}
const multiplyByRTwo = multiplyBy(2); //= function (x) { return x*2}; 
const multiplyByRThree = multiplyBy(3); //= function (x) { return x*3};        //리펙토링 한거 : multiplyBy함수를 만들어 반복되는 코드에 대한 처리를 하는 것

console.log(multiplyByRTwo(5));
console.log(multiplyByRThree(5));

const result = add(multiplyByRTwo(5), multiplyByRThree(10));   //2*5 + 3*10 = 40이 나오는 것
console.log(`Final => ${result}`);