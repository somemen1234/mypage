//2. 인자에 대한 제어권을 갖는다
//map 함수 : 배열에 대한 API 매서드, 배열의 하나하나를 순회해 기존의 배열을 변경하지 않고 새로운 배열을 생성하는 것
let newArr = [10, 20, 30].map(function(currentValue, index) {       //첫인자는 배열의 첫값부터 하나하나 / 두번째 인자는 인덱스 0부터 1씩 증가
    console.log(currentValue, index);
    return currentValue +5 ;                               //map은 무조건 return을 해야한다!
})

console.log(newArr)
//-------------------------------------------------------------

let newArr1 = [10, 20, 30].map(function(index, currentValue) {       //첫인자는 배열의 첫값부터 하나하나 / 두번째 인자는 인덱스 0부터 1씩 증가
    console.log(index, currentValue);
    return currentValue +5 ;                               //map은 무조건 return을 해야한다!
})

console.log(newArr)         //[5, 6, 7]출력 
//원하는 것을 얻고자 하면 명세서에 나와있는 대로 작성해야 함. Array.prototype.map()참고
