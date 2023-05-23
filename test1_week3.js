// getAged는 숫자만큼 나이를 먹은 객체를 새로 생성(객체에 대한 복사)하는 문제! (원래 객체의 user와 복사된 agedUser을 비교 해 같은지 다른지의 비교 문제!)
// 내가 만든 답
var user = {
    name: "john",
    age: 20,
}

var getAged = function (user, passedTime) {
		var agedUser = user.name
        var agedAge = user.age + passedTime
        return agedUser, agedAge
}                                               //객체는 참조형을 쓰고 있기에 이 방법으로 해야한다(순회하며 아예 새로운 객체를 만들어야 한다!)

//답안지 정답 요게 더 정확쓰
// var getAged = function (user, passedTime) {
//     var newUser = {};
//     for (var prop in user) {
//         newUser[prop] = user[prop];
//     }

//     newUser.age += passedTime;
//     return newUser
// }                           

var agedUser = getAged(user, 6);  //위 user랑 다른놈으로 만들어야 함

var agedUserMustBeDifferentFromUser = function (user1, user2) {
    if (!user2) {
		    console.log("Failed! user2 doesn't exist!");
	  } else if (user1 !== user2) { 
        console.log("Passed! If you become older, you will be different from you in the past!")
    } else {
        console.log("Failed! User same with past one");
    }
}

agedUserMustBeDifferentFromUser(user, agedUser);