//Map
//JS -> 객체, 배열을 사용해 많고 다양하고 복잡한 프로그램을 만들어 왔다, 그럼에도 현실세계를 반영하기에는 많이 어려움
//프로그래밍적으로 부족한 부분을 보완하기 위해 Map, Set 같은 추가적인 자료구조가 등장함!!

//Map, Set 목적은 데이터의 구성, 검색, 사용을 효율적으로 처리(기존의 객체, 배열보다)

//1)Map : key / value 쌍을 저장(객체는 key에 무조건 문자형태가 들어옴 but Map은 key에 어떠한 유형의 데이터 타입도 들어옴)
// Map은 키가 정렬된 순서로 저장되기 때문이다!!
// - 기능 : 검색, 삭제, 제거, 여부 확인
//Map은 대량데이터 처리에 사용, 반복적인 부분이 상당히 중요(반복을 위한 메서드가 있음 - for of)
//반복을 위한 메서드 : keys(), values(), entries() => 세개 다 iterator형태를 가지고 있기에 for of를 쓸 수 있음
// for (let value of iterable) {} : 하나하나 순서를 반복해가면서 검색

// myMap.set('key', 'value') // 꼭 이러한 값으로 넣어 줘야 함
// myMap.get('key') // 이러한 형태로 검색 (set, get은 항상 페어다)

const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);
console.log(myMap.get('one'));  //Map의 데이터 검색(value값인 1 출력)

// console.log(myMap.keys());      //얘를 이용해서 for of문을 돌려보기
for (const key of myMap.keys()) {
    console.log(key);
}                                    //key가 하나하나하나 들어가면서 데이터를 처리(key를 출력했음 여기서는)

// console.log(myMap.values());
for (const value of myMap.values()) {
    console.log(value);
}                                      //value 하나하나가 console.log 안에 배정이 되는 것

// console.log(myMap.entries());      // 각 key-value를 배열로 묶어 전체를 객체로 감쌌음
for (const entry of myMap.entries()) {
    console.log(entry)
}                                       //각각의 entry인 [key, value]를 하나하나 console.log안에 들어가 배정

console.log(myMap.size) //(길이) : Map크기 확인(여기서는 3)
console.log(myMap.has("two"))//- key기반 검색 myMap에서 two라는 키가 있는지 : Map에 해당 값이 있는지 확인