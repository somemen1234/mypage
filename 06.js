// 배열의 요소로 함수를 할당
const myArr = [
    function(a, b) {
        return a+b;
    }, function(a, b) {
        return a-b;
    }
];

console.log(myArr[0](2, 6));    //더하기 호출

console.log(myArr[1](10, 6));   //빼기 호출