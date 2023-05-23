function a (x) {      //예상출력결과
	console.log(x);   //1
	var x;
	console.log(x);   //undefined
	var x = 2;
	console.log(x);   //2
}
a(1);                         


//(실제 출력 결과)위 함수를 호이스팅 하게 되면 식별자 정보를 전부 끌어올림
    //  => function a (x) {
    //         var x;
    //         var x;
    //         var x;
    //         x = 1;            //a(1)이므로
    //         console.log(x);   //1
    //         console.log(x);   //1
    //         x= 2;
    //         console.log(x);   //2
    //     }
    //     a(1);      

function b () {         //예상결과
    console.log(b);    //undefined
    var b = 'bbb';     //호이스팅으로 올라감
    console.log(b);    //'bbb'
    function b() { }    // 함수 전체가 올라감(호이스팅)
    console.log(b);     //function b
}
b();

//호이스팅 시
// function b () {
//     var b;
//     function b() {}
//     console.log(b); //function b
//     b= 'bbb';
//     console.log(b); //bbb
//     console.log(b); //bbb
// }
// b();