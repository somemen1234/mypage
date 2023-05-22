//구조분해할당 : destructuring(de + structure + ing) => de = not, structure = 구조 즉, 구조를 반대로 찢어버린다(구조를 없애 버린다)
// 객체안에 있는 각각의 속성(구조)들을 분해해서 하나하나 변수에 할당하고 있다, 각각의 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 해주는 것

//1. 배열
//let [value1, value2] = [1, "new", 4]     //오른쪽에 있는 배열을 분해해서 1을 value1에 2를 value2에 할당 해줌

// let arr = ["value1", "value2", "value3"];
// let [a, b,  c] = arr;                       //arr에 각각의 값을 가진 배열을 만든다음 해당 배열의 각각 위치에 있는 값을 a, b, c에 할당한다!(신기방기)
// if) let [a, b, c, d] = arr; 인 경우는 d자리에 arr값이 없으므로 undefined로 출력이 됨(null은 개발자가 직접 없다라고 선언하는 것!(구별 주의)) let[a, b, c, d=4] //이렇게 초기 값 세팅가능(initial value)

//2. 객체
//구조분해 할당! let {name, age} = { name : 'abc', age:30}; //왼쪽의 'name'에 abe값이 할당, age에는 30이 할당(name과 age는 각각 string, number타입이 됨)

let uesr = {name: 'abc', age: 30};
// let { name: newName, age: newAge} = user; // newName에 'abc'가 들어가고 newAge에 30이 들어감
let {name, age, birthday} = uesr; // birthday를 받으려했지만 user에는 birthday가 없으므로 각각 결과는 abc 30 undefined가 됨. (여기도 birthday='today'로 초기값을 가질수 있음 - 값을 받으면 당연히 바뀜)
