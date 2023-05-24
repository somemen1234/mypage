//Static Method
//Class => 객체를 만들기 위해서 사용 ( 다량, 안전, 정확하게)

//정적 클래스(내부 메소드가 static) - 굳이 인스턴스화 시킬 필요가 없을 때 사용한다!
class Calculator {      //생성자 만들어서 new만들고 할 필요가 없다 바로 접근하고 싶다!
    static add(a, b) { //static을 사용하면 Calculator.으로 바로 호출이 가능하다!
        console.log("[계산기] 더하기를 진행합니다.")
        return a+b;
    }   
    static substract(a, b) {
        console.log("[계산기] 빼기를 진행합니다.")
        return a-b;
    }
}

console.log(Calculator.add(3, 5));
console.log(Calculator.substract(10, 6));