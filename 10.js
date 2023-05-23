//괜찮지만 두 생성자가 모두 사람(두 개를 합칠 수 있지 않을까??)
//call과 apply를 이용해 하나로 줄일 수 있다.
//두 생성자의 공통요소 는 이름과 젠더임! 이를 통해 생성자 하나 만듬.
function Person(name, gender) {
	this.name = name;
	this.gender = gender;
}

function Student(name, gender, school) {
	Person.call(this, name, gender); // call을 이용해서 이렇게 표현 가능! 여기서 this는 student 인스턴스!
    // this.name = name;
    // this.gender = gender;
	this.school = school;
}
function Employee(name, gender, company) {
	Person.apply(this, [name, gender]); // apply를 이용해 이렇게 표현 가능! 여기서 this는 employee 인스턴스!
    // this.name = name;
    // this.gender = gender;
	this.company = company;
}
var kd = new Student('길동', 'male', '서울대');
var ks = new Employee('길순', 'female', '삼성');