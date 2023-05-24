//클로저(Closure) : 클로저는 함수와 그 함수가 선언된 LE(Lexical Environment)과의 조합
//클로저와 LE
//외부함수보다 중첩 함수가 더 오래유지되는 경우 중첩함수!!!는 이미 생명주기가 종료!!!된 외부 함수의 변수를 ★★★여전히!!! 참조할 수 있다(여기서의 중첩함수가 클로저)
const x = 1;

function outerFunc() {
  const x = 10;
  function innerFunc() {
    //x가 내부scope에 없음 -> outer로 시선을 돌림 ->outer는 이 함수가 실행될 때의 LE(당시의 변수정보 등)
    //outer는 outerFunc => 따라서 x는 10이다.
    //함수가 선언된 렉시컬 환경 -> 함수가 선언될 당시의 외부 변수 등의 정보
    console.log(x); //10
  }

  innerFunc();
}

outerFunc();