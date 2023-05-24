//3. this에 대한 부분
//제어권을 넘겨받을 코드에서 콜백 함수에 별도로 this가 될 대상을 지정 시 그 대상을 참조 함. (예외사항을 만들었다.)
//this를 명시적으로 바인딩 한다면 this가 바인딩 됨

Array.prototype.map123 = function(callback, thisArg) {

    // map함수에서 return할 결과 배열
    let mappedArr = [];

    for(var i=0; i<this.length; i++) {
        let mappedValue = callback.call(thisArg || globalThis, this[i]);
        mappedArr[i] = mappedValue;
    }

    return mappedArr;
};                                //마치 맵함수처럼 호출할 수 있게끔

let newArr = [1, 2, 3].map123(function(number) {
    return number * 2
})

console.log(newArr)