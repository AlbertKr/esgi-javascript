function type_check_v1(arg1, arg2){
    
    if( typeof arg1 === arg2 ){
        return true;
    }else if( typeof arg1 === null ){
        return true;
    } else if( typeof arg1 === 'undefined' ){
        return true;
    }else if( Array.isArray(arg1) ){
        return true;
    }
    return false;

}

/*
var myUndefined = undefined;

function myFunction(){
    console.log('test');
}

console.log(type_check_v1(1,"number"));
console.log(type_check_v1("string","number"));
console.log(type_check_v1(true,"number"));
console.log(type_check_v1({"prop1": 1},"object"));
console.log(type_check_v1(null,"null"));
console.log(type_check_v1(null,"object"));
console.log(type_check_v1(myUndefined,"undefined"));
console.log(type_check_v1("string","string"));
console.log(type_check_v1([1,2,3],"array"));
console.log(type_check_v1(myFunction,"function"));
console.log(type_check_v1([1,2,3],"object"));
*/