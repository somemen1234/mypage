//콜백지옥
//callback 특징 자체가 익명 함수이다 보니까 매게 변수자리에 콜백함수가 들어가는 과정이 반복되면 들여쓰기 깊이가 헬 수준이 되는 것
//주로 이벤트 처리 및 서버 통신과 같은 비동기적 로직 작업을 수행할 때 발생한다!!!
//문제는 가독성이 지옥!! & 유지보수가 어려움
//what 동기(synchronous)? 현재 실행중인 코드가 끝나야 다음 코드를 실행, CPU계산에 의해 즉시 처리가 가능한 대부분의 코드는 동기적 코드(일의 순서가 중요)
//비동기(asynchronous)? 현재 실행중인 코드와 무관하게 즉시 다음 코드로 넘어감, setTimeout, addEventListener, 별도의 요청!/실행 대기!/보류!등과 관련된 코드 모두 비동기적인 코드
//복잡도가 올라갈 수록 비동기적 코드의 비중이 늘어남(콜백 지옥들이 늘어남)

//비동기적 코드 이해
// setTimeout(function(){
//     console.log('여기는 과연 언제 실행될까?')          //이게 뒤늦게 실행(1초 뒤에 실행)
// }, 1000);

// console.log('여기좀 봐주세요')          //둘다 주문을 받고 위의 콜백함수는 1초뒤에 실행되므로 얘 먼저 실행함.


//콜백 지옥
setTimeout(
    function (name) {
      var coffeeList = name;
      console.log(coffeeList);

      setTimeout(
        function (name) {
          coffeeList += ", " + name;
          console.log(coffeeList);
  
          setTimeout(
            function (name) {
              coffeeList += ", " + name;
              console.log(coffeeList);
  
              setTimeout(
                function (name) {
                  coffeeList += ", " + name;
                  console.log(coffeeList);
                },
                500,
                "카페라떼"
              );
            },
            500,
            "카페모카"
          );
        },
        500,
        "아메리카노"
      );
    },
    500,
    "에스프레소"
);

//콜백 지옥 해결방법 : 기명함수를 통해 해결하기!(함수에 이름을 전부 붙여줌!!) => 어차피 익명함수를 한번만 사용할 건데 이름을 붙이게 되면 인적 리소스 낭비가 생긴다.
var coffeeList = '';

var addEspresso = function (name) {
	coffeeList = name;
	console.log(coffeeList);
	setTimeout(addAmericano, 500, '아메리카노');
};

var addAmericano = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
	setTimeout(addMocha, 500, '카페모카');
};

var addMocha = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
	setTimeout(addLatte, 500, '카페라떼');
};

var addLatte = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
};

setTimeout(addEspresso, 500, '에스프레소');