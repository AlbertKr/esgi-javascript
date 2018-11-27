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