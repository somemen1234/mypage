//렉시컬 스코프 : JS엔진은 함수를 어디서 '호출'했는지가 아닌 어디에 ★★★'정의' 했는지에 따라서 스코프(상위 스코프)를 결정한다.

//외부 렉시컬 환경에 대한 참조값 => 실행컨텍스트에 있는 outer
//outer는 함수 '정의'가 평가되는 시점에!! 결정이 된다
const x = 1;

// innerFunc()에서는 outerFunc()의 x에 접근할 수 없죠.(☆서로 별도의 스코프를 가지고 있기 떄문에!!)
// & Lexical Scope를 따르는 프로그래밍 언어이기 때문
//outer내부에 inner가 '호출'되고 있음에도 불구하구!
function outerFunc() {
  const x = 10;
  innerFunc(); // 1
}

function innerFunc() {
  console.log(x); // 1
}

outerFunc();