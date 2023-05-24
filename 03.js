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

const car1 = new Car('K3', '2022', 'g', 2000);
const car2 = new Car('benz', '2021', 'd', 5000 );
const car3 = new Car('그랜져','2023', 'e', 6000 );

car1.makeNoise();
car1.printModelYear();

car2.makeNoise();
car2.printModelYear();

car3.makeNoise();
car3.printModelYear();



