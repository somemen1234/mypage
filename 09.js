//Set : 자료구조 중 하나
//특징으로는 고유한 값을 저장하는 자료구조, 값만 저장(키는 저장하지 않음), 값이 중복되지 않는 유일한 요소로만 구성!(Unique)

//값 추가, 검색, 값 삭제, 모든 값 제거, 존재 여부 확인(집합이라 생각하면 됨)

let mySet = new Set();
let sorted = [];
let i = 0;
mySet.add('value1');       //Map과 다르게 key는 넣지 않고 value만 넣음!(집합이기에 & 값이 중복안됨 - 중복되면 합쳐짐)
mySet.add('value2');
mySet.add('value2');     //이렇게 중복된 값을 추가하면 중복 값으로 인식하기에 Set은 변하지 않음(size또한 5)
mySet.add('value3'); 
mySet.add('value5'); 
mySet.add('value8'); 

console.log(mySet.size) //Set크기(길이)
console.log(mySet.has('value1'));
console.log(mySet.has('value2'));
console.log(mySet.has('value3'));      //Set이 값을 가지고 있는지 확인

//Iterator
for(const value of mySet.values()){
    console.log(value)
    sorted[i] = value
    i++;
}                                     //얘는 Map과 다르게 선택지가 없음 value만 출력하기에 mySet.values()로만 가능함

console.log(sorted)