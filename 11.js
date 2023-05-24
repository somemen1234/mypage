//중첩함수(innerFunc)가 외부함수(Outer)보다 더 오래 유지되는 경우 생명주기가 종료된 외부함수의 변수(x=10)를 여전히! 참조 할 수 있다 -> 요게 클로저
const x = 1;

// 1
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner; //리턴을 해주고
}

//outer함수를 실행해서 innerFuc에 담는다!
//outer함수의 return부분을 innerFunc에 담는다는 얘기임
const innerFunc = outer(); //innerFunc에서 호출됨
//-------------여기서까지의 outer의 실행context popUp되어서 종료됨
innerFunc(); //outer가 popUp되어서 사라졌음에도 innerFunc의 x는 여전히 10을 출력할 수 있다. -> 클로저!!
//어떻게 가능? 참조카운트0인애들은 가비지컬렉터가 가져가는데 이 떄 안쓰는 애들만 가져감(innerFunc가 여전히 outer를 참조하고 있기에 놔둔다!)