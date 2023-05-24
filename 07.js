//[추가 요구사항] : 전기차 클래스 만들기 (Car상속)
class Car {
    constructor(modelName, modelYear, type, price) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }

    makeNoise() {
        console.log(`${this.modelName}의 클락션 : 빵빵`)
    }

    printModelYear() {
        console.log(`${this.modelName}은 ${this.modelYear}년도 모델 입니다.`)
    }
}

class ElectronicCar extends Car {
    //만약 재정의가 필요하다면 재정의가 필요(생성자의 내용이 부모클래스랑 다르면 꼭 써줘야 함)
    constructor(modelName, modelYear, price, chargeTime) {
        //부모클래스에게도 자식클래스의 생성자가 만들어진걸 알려주기
        super(modelName, modelYear, 'e', price); //super 안의 매개변수는 부모의 것을 가져오는 것이므로 꼭 전부 적어줘야 함!
        this._chargeTime = chargeTime
    }

    set chargeTime(value) {
        this._chargeTime = value;
    }
    get chargeTime() {
        return this._chargeTime;
    }
}

const eleCar1 = new ElectronicCar('테슬라', '2018', 9000, 60);
eleCar1.makeNoise();
eleCar1.printModelYear();

console.log(eleCar1._chargeTime);
eleCar1.chargeTime = 20;
console.log(eleCar1._chargeTime);
// const car1 = new Car('K3', '2022', 'g', 2000);
// const car2 = new Car('benz', '2021', 'd', 5000 );
// const car3 = new Car('그랜져','2023', 'e', 6000 );

// car1.makeNoise();
// car1.printModelYear();

// car2.makeNoise();
// car2.printModelYear();

// car3.makeNoise();
// car3.printModelYear();



