// 단출 속성명 : property shorthand (정말 정말 많이 사용함!! 알아둬야 함)
// const name = "nbc";
// const age = '30';
//JS에서 오브젝트는 key-value pair인데, 오른쪽이 실질적 데이터임(오른쪽을 변수로 쓸수 있음)=> 왼쪽과 오른쪽이 가끔 한 번씩은 이름이 겹칠 수 도 있는데, 이런 케이스에서는 생략이 가능!
// const obj = { name , age }   // ={name: name, age: age}  왼쪽과 오른쪽이 같으므로 생략이 가능하다.

// 전개 구문 = spread operator, 기존에 있었던 객체의 중괄호를 풀어버리고 완전히 다 퍼지게 한 다음에 묶거나 묶지않고 사용(핵심은 스프레드이다!) (destructurinng과 가장 많이 사용하는 es6 문법!!!!!!!!!!!!!!!!)
let arr = [1, 2, 3];
console.log(arr);         //배열로 출력
console.log(...arr);      // 1 2 3으로 전개가 되어버림(대괄호인 배열이 없어지고), 이 구조를 벗어버리고 새로운 구조로 덧입혀야 될 때 사용한다.
let newArr = [...arr, 4];   // 배열 1, 2, 3을 가져온 거에 4를 추가로 더해 새로운 배열을 만듬
console.log(newArr)

// 전개 구문 (객체)
let user = { name: 'abc', age: 30}
let user2 = {...user}
console.log(user2)

//나머지 매개변수(rest parameter) : 매개변수의 개수를 정확히 모를 때 ...args로 사용이 가능(꼭 이걸로 정의해줘야만 나머지 args를 인식할 수 있음!)
function exampleFunc(a, b, c, ...args) {     //추가적으로 arguments가 들어올 수 있다라고 명시
    console.log(a, b, c);
    console.log(...args);          //...을 빼면 배열 형태로 들어감 ex) console.log(args) } exampleFunc(1,2,3,4,5,6,7) => 1 2 3
                                                                                                                    //[4, 5, 6, 7]
}

exampleFunc(1, 2, 3, 4, 5, 6, 7)

//템플릿 리터럴(활용도 어마어마함!) (Template Literal) => ``(backtick) 안에 JS가 들어갈수 있음 넣을 때는 ${JS} 안에 넣고 사용!
//& 템플릿 리터럴은 멀티라인을 지원함(개발자 측면에서 표현할 수 있는 편리성)
console.log(`
    Hello
        my name is JS!
        
        nice to meet you
`)                                    //활용 예
