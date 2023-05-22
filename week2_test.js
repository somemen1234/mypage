// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
//  예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

//1. 문자열 앞에 인덱스에 해당하는 문자를 붙임 2. 사전순으로 정렬 3. 정렬된 배열의 가장 앞 글자를 땐다.

let Strings = ["abce", "abcd", "cdx"];
let n = 2;

function sort_String(list, number) {
    let i=0;
    for(a in list) {
        list[i] = list[i].slice(number, number+1) + list[i];
        i++;
    }
    list.sort();
    i=0;
    for(a in list) {
        list[i] = list[i].substring(1, list[i].length);
        i++;
    }
console.log(list)
}
sort_String(Strings, n);