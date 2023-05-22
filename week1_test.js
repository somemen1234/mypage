let s = "ppRElacEmEnTY"
let p_number = 0;
let y_number = 0;
let result = true;
for (a=0; a<s.length; a++) {
    if(s[a] === "p" || s[a] === "P") {
        p_number += 1;
    } else if(s[a] === "y" || s[a] === "Y") {
        y_number += 1;
    }
}
function is_eql(i, j) {
    if(p_number === y_number) {
        return true;
    } else if(p_number !== y_number){
        return false;
    } else {
        return true;
    }
}
result = is_eql(p_number, y_number);
console.log(result)
