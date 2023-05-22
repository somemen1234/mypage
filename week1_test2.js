let absolutes = [-5, 1, -3, 7, -9, 2] //이렇게 해서 절대값으로 만들어도 되고 처음부터 [5, 1, 3, 7, 9, 2]로 설정해도 동일함.
let sign = ['-','+', '-' , '+', '-', '+']
let result = 0
for (i=0; i<absolutes.length; i++) {
    absolutes[i] = Math.abs(absolutes[i])
}
function solution(absolutes, sign) {
    for(i=0; i<absolutes.length; i++) {
        if(sign[i] === '+') {
            result += absolutes[i]
        } else if(sign[i] === '-') {
            result += -absolutes[i]
        } 
    }
    return result

}
solution(absolutes, sign);
console.log(result)