function type_check_v1(arg1, arg2){
    
    if( typeof arg1 === arg2 ){console.log('yes');
        return true;
    }
console.log('nope');
    return false;

}


type_check_v1(1, 'number');