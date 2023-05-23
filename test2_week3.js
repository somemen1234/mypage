//요거는 console에서 찍어야 오류가 안남(vs code에서의 전역 this는 global을 가리키기 때문에 문제 의도에 맞게 브라우저에서 실행 = 얘는 window를 가리킴)
var fullname = 'Ciryl Gane'

var fighter = {
    fullname: 'John Jones',
    opponent: {
        fullname: 'Francis Ngannou',
        getFullname: function () {
						// 1. 객체 this 바인딩 : 프란시스 은가누
            return this.fullname;
        }
    },

    getName: function() {
				// 2. 객체 this 바인딩 : 존 존스
        return this.fullname;
    },

    getFirstName: () => {
				// 3. 함수 this 바인딩 : 시릴
        return this.fullname.split(' ')[0];
    },

    getLastName: (function() {
				// 4. 함수 this 바인딩 : 시릴
        return this.fullname.split(' ')[1];
    })()

}

console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName());
console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName);