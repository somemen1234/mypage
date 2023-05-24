//콜백함수를 넘겨받는 주체가 가진 제어권
//1. 호출 시점에 대한 제어권을 갖는다.
//setInterval(); : 반복해서 매개변수로 받은 콜백함수의 로직을 수행 상당히 유용, 콜백함수를 인자로 받음
let count = 0;
let cbFunc = function() {
    console.log(count);
    if(++count>4) clearInterval(timer); // count가 5가 되어 if에 만족해 clearInterval이 되면서 로직을 빠져나옴 
};

//매개변수에 콜백함수를 넣어줬을 때(setInterval로 넘겨주었을 떄)는 0.3초에 대한(호출시점에 대한) 제어권은 콜백함수를 가져간 setInterval이 가지고 있다. (호출주체, 제어권은 얘가 가짐)
let timer = setInterval(cbFunc, 300);                    //0.3초 간격으로 0 1 2 3 4 까지 찍어줌
cbFunc(); // 얘는 호출 주체와 제어권은 모두 사용자