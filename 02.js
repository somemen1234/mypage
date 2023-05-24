// JS의 클래스 문법은 ES6에서야 도입되었음
// 클래스 : 책상을 만드는 설계도 (그 규격대로 어떻게 만들고 다리는 몇개 만들어야 하는지 기능이 무엇인지 등등을 명세해 놓은), 이 설계도를 보면 어떤 종류 책상만드는지 색깔이 무엇인지 등의 특징이 무엇인지 알 수 있음.
// 인스턴스 : 클래스를 기반으로 만들어진 실제 사물(책상), 설계도에서 그려진 속성과 메소드를 다 가지고 있다.

//클래스 설계도 제작 - 객체를 정확하고 빠르게 많이 만들 수 있기 때문에
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`${this.name}님은 전데용?!`);
    }

    sayMyName() {
        console.log(`${this.name}의 나이는 ${this.age}입니다.`)
    }
}

//인스턴스 만들기
const person1 = new Person('박성민', '30');
const person2 = new Person('박성용', '26');

person1.sayHello();
person2.sayHello();
person1.sayMyName();