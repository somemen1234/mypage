//상속(Inheritance)
//클래스를 유산으로 내려주는 주요 기능!!(부모가 가진 형,질을 내려주는 것)
//부모 <-> 자식

//동물 전체에 대한 클래스
class Animal {
    constructor (name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} says!`)
    }
}

class Dog extends Animal {
    //부모로부터 상속받은 메소드를 재정의 하는 행위 OverRiding(오버라이딩)
    speak() {
        console.log(`${this.name} barks!`)
    }
}

const cuttyPuppy1 = new Dog('봉구');
cuttyPuppy1.speak();