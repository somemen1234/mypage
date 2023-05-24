// 클래스 연습해보기!
// [요구사항]
// 1. Car라는 새로운 클래스를 만들되, 처음 객체를 만들 때는
//    다음 네 개의 값이 필수로 입력돼야 합니다!
//    (1) modelName
//    (2) modelYear //연도도 문자임!!!
//    (3) type : 가솔린, 전기차, 디젤
//    (4) price
// 2. makeNoise() 메서드를 만들어 클락션을 출력해주세요.
// 2-1. 해당 자동차가 몇년도 모델인지 출력하는 메서드 작성!
// 3. 이후 자동차를 3개 정도 만들어주세요(객체 생성)

// [추가 요구사항]
// 1. modelName, modelYear, price, type을 가져오는 메서드
// 2. modelName, modelYear, price, type을 세팅하는 메서드
// 3. 만든 인스턴스를 통해서 마지막에 set 해서 get 하는 로직까지
class Car {
    constructor(modelName, modelYear, type, price) {
        this._modelName = modelName;
        this._modelYear = modelYear;
        this._type = type;
        this._price = price;
    }

    get modelName() {
        return this._modelName;
    }

    //입력값의 검증까지 가능하기에 중요하다!
    set modelName(value) {
        //유효성 검사 실시!(잘못된 데이터가 들어오지 않도록)
        if(value.length <= 0) {
            console.log('[오류] 모델이름이 입력되지 않았습니다.')
            return; //오류 발생하면 바깥으로 빠져나오게 함 아래로 흐르지 않게
        } else if (typeof(value) !== 'string') {
            console.log('[오류] 모델이름 오류 입니다.')
            return;
        }

        this._modelName = value;
    }
    get modelYear() {
        return this._modelYear;
    }

    set modelYear(value) {
        //유효성 검사 실시!(잘못된 데이터가 들어오지 않도록)
        if (value.length !== 4) {
            //연도에 대한 유효성 검증 로직은 구글링하면 엄청~~많이 나옴
            console.log('[오류] 입력된 년도가 4자리가 아닙니다.')
            return;
        } else if (typeof(value) !== 'string') {
            console.log('[오류] 입력된년도 오류 입니다.')
            return;
        }

        this._modelYear = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        //g, d, e가 아닌경우 오류
        if(value.length <= 0) {
            console.log('[오류] 타입이 입력되지 않았습니다.')
            return; //오류 발생하면 바깥으로 빠져나오게 함 아래로 흐르지 않게
        }else if(value !== 'g' && value !== 'd' && value !== 'e') {
            console.log('[오류] 타입 오류 입니다.')
            return;
        }

        this._type = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if(typeof(value) !== 'number') {
            console.log('[오류] 입력된 가격이 숫자가 아닙니다.')
            return;
        } else if(value.length < 100) {
            console.log('[오류] 가격이 100만원보다 작을 수 없습니다. 확인해주세요.')
            return; //오류 발생하면 바깥으로 빠져나오게 함 아래로 흐르지 않게
        }
        
        this._price = value;
    }

    makeNoise() {
        console.log(`${this._modelName}의 클락션 : 빵빵`)
    }

    printModelYear() {
        console.log(`${this._modelName}은 ${this._modelYear}년도 모델 입니다.`)
    }
}

const car1 = new Car('K3', 2022, 'g', 2000);
const car2 = new Car('benz', 2021, 'd', 5000 );
const car3 = new Car('그랜져', 2023, 'e', 6000 );

// car1.makeNoise();
// car1.printModelYear();

// car2.makeNoise();
// car2.printModelYear();

// car3.makeNoise();
// car3.printModelYear();

// getters예시
console.log(car1.modelName);
// setters예시
car1.modelName = 'K5';
console.log(car1.modelName);

