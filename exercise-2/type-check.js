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

var myUndefined = undefined;

function myFunction(){
    console.log('test');
}

/*
type_check_v1(1,"number");
type_check_v1("string","number");
type_check_v1(true,"number");
type_check_v1({"prop1": 1},"object");
type_check_v1(null,"null");
type_check_v1(null,"object");
type_check_v1(myUndefined,"undefined");
type_check_v1("string","string");
type_check_v1([1,2,3],"array");
type_check_v1(myFunction,"function");
type_check_v1([1,2,3],"object");
*/