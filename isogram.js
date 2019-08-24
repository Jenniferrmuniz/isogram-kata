
function isIsogram(str){

    str = str.toLowerCase();
    console.log(str);
    for(let i=0; i<str.length; i++){
        for(let j=0; j<str.length; j++){

            if(i===j){
                continue;
            }

            if(str[i]===str[j]){
                return false;
            }
        }
    }
    return true;
}

console.log(isIsogram(''));