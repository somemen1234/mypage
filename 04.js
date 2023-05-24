//Getters Setters
//모든 객체지향 프로그래밍 언어 -> G, S의 기본적 개념들이 있다.
//클래스를 통해 객체(인스턴스)를 만드는데 인스턴스 안에는 프로퍼티가 있다(constructor을 통해 정의) ex) new Class(a, b, c) // a b c 가 property

//getters, setters 약속 : this 앞에는 _(underscore : private한 값을 가짐, 은밀하고 감춰야 할 떄)다붙이기!!!!!
class Rectangle {
    constructor(height, width) {
        this._height = height; 
        this._width = width;
    }

    get width() {    //width를 위한 getter
        return this._width;
    }
    set width(value) { //width를 위한 setter, 외부로부터 값이 들어왔을 때 내부적으로 검증 후 세팅을 할 수 있음
        if(value <= 0) {
            console.log('[오류] 가로길이는 0보다 커야 합니다!')
        } else if(typeof(value) !== 'number') {
            console.log('[오류] 가로길이 입력 값이 숫자 타입이 아닙니다.')
        }
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {         //Maximum call stack size exceeded : 콜스택에 쌓이는 실행컨텍스트의 사이즈가 너무 커졌다(무한루프)
        if(value <= 0) {
            console.log('[오류] 세로길이는 0보다 커야 합니다!')
        } else if(typeof(value) !== 'number') {
            console.log('[오류] 세로길이 입력 값이 숫자 타입이 아닙니다.')
        }
        this._height = value;     //무한반복 돌기 때문에 _를 써서 이 인스턴스 내에서만 쓰기 위해서만 사용하겠다 라고 정한 것임
    }

    getArea() {
        const a = this._width * this._height
        console.log(`넓이는 => ${a}입니다.`)
    }
}

const rect1 = new Rectangle(10, 20);
// const rect2 = new Rectangle(20, 20);
// const rect3 = new Rectangle(15, 25);
rect1.getArea();
