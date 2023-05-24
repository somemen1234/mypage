//콜백함수를 왜 중첩해야만 하는가? ☆비동기 작업의 동기적 표현이 필요하므로!!!!!!!!!
//비동기 작업 특징 - 순서를 보장 하지않음 (언제 결과가 제어권을 넘겨준 코드로부터 나에게 오는지 모름 - setTimeout은 시간을 정해지잖아요? 이건 얘의 입장이고 넘겨준 코드 입장에선 모르다!& 실제 서버 / 클라이언트 통신에서는 순서 예상 불가능)
// 발생 예ex) 네이버의 날씨 정보를 받아서(웹 크롤링) daum지도를 업데이트 하고 싶다라 했을 때 우선순위는 무조건 네이버가 1순위여야함(날씨정보를 받아야 업데이트를 하든 말든 하지) - 평소에는 네이버에서 잘 주다가
//           서버 과부하로 3초가 걸린 작업이 10초가 걸리기 시작함.(다음은 변함없이 8초의 응답을 줬었다 가정) - 작업이 10초가 걸려버리면 네이버를 가져오기도 전에 다음을 가져와버려서 문제가 발생함!(내부에서는 대응 할 수가 없는 상황이 됨)
//위의 작업 문제를 발생하지 않게 하려면 비동기적인 작업도 순서를 보장하는 동기적인 작업처럼 보이게 하기 위해 처리하는 것!(08.js처럼) - 콜백지옥 발생
//Promise,Generator(ES6), async/await(ES7)
//1.Promise : 비동기 작업을 동기적으로 표현하는 과정이다(약속),비동기처리가 끝나면(작업) 처리가 끝나면 알려달라는 약속 - new 연산자로 호출한 Promise의 인자로 넘어가는 콜백은 바로 실행!
// 내부의 resolve(성공) / reject(실패) 함수 호출 구문이 있을 때, resolve/reject 중 하나가 실행되기 전까지 다음(then) / 오류(catch)로 넘어가지 않습니다!
// 따라서 비동기 작업이 완료시 비로소 resolve, reject를 호출한다!!!!

//콜백지옥 해결하기!
//Promise : new연산자로 호출한 Promise의 인자로 넘어가는 콜백은 바로 실행, resolve/reject가 있을 때 두 개 중 하나가 실행되기 전까지 then/ catch로 넘어가지 않아유(따라서 비동기작업이 완료시 resolve, reject가 실행됩니다.)
new Promise(function(resolve){ //매개변수에 resolve, reject가 들어감
    setTimeout(function() {
        let name = '에스프레소';
        console.log(name);
        resolve(name);            
    }, 500)
})
.then(function(prevName) {
    //여기서도 새롭게 Promise
    return new Promise(function(resolve){ //매개변수에 resolve, reject가 들어감
        setTimeout(function() {
            let name = prevName + ', 아메리카노';
            console.log(name);
            resolve(name);            
        }, 500);
    })
})
.then(function(prevName){
    return new Promise(function(resolve){ //매개변수에 resolve, reject가 들어감
        setTimeout(function() {
            let name = prevName + ', 카페모카';
            console.log(name);
            resolve(name);            
        }, 500);
    })
})
.then(function(prevName){
    return new Promise(function(resolve){ //매개변수에 resolve, reject가 들어감
        setTimeout(function() {
            let name = prevName + ', 카페라떼';
            console.log(name);
            resolve(name);            
        }, 500);
    })
})
