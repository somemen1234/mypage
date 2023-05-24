//refactoring : 비효율적인 코드를 효율적인 코드로 변경하는 것(반복되는 로직을 함수화 시키는 등)

//09.js를 리팩토링 해본다 -우리가 안에 넣어줄 껀 새로운 커피 이름만 넣어주면 됨(이것을 변수로 받아서 이 변수를 기반으로 내부에 로직을 생성하게끔 만듬)
//맨처음호출하는 부분은 new Promise부분만 있으면 되고 그 다음부터는 function(preName)부터 끝까지 있어야 함.(이것을 다 저기에 넣으려 함)
let addCoffee = (name) => {        //function (name) { ~ }
    return function(prevName){
        return new Promise(function(resolve){ //매개변수에 resolve, reject가 들어감
            setTimeout(function() {
                let newName = prevName ? `${prevName}, ${name}`: name;     //preName이 있다하면 앞에꺼 실행 없으면 name만 대입(간단한 로직은 3항 연산자)
                console.log(newName);
                resolve(newName);            
            }, 500);
        });
    };
};

addCoffee('에스프레소')()             //얘는 실행하고 싶은 부분이 new Promise(~)부터 이므로 요기부분을 실행하고 싶다 => 그냥 실행하면 맨처음 괄호부분이 실행됨 하지만 우리가 원하는 부분은 return 안의 내용 부분임 => 얘를 실행하기 위해서 뒤에 괄호를 열고닫는거 일반 함수호출처럼 func2() 
    .then(addCoffee('아메리카노'))
    .then(addCoffee('카페모카'))
    .then(addCoffee('카페라떼'));