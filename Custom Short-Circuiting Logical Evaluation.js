function check_operator_and(arg1, arg2) {
    if (Boolean(arg1)) {
        if (Boolean(arg2)) {
            return arg2
        } else if (!Boolean(arg2)) {
            return arg1;
        } 
    } else {
        return arg1;
    } 
}

function check_operator_nullish(arg1, arg2){
    if (arg1 == null ) {
        if (arg2 == null) {
            return null
        } else if (arg2 == undefined) {
            return undefined;
        }
        return arg2;
    } else if (arg2 == undefined) {
        if (arg1 == null) {
            return arg2;
        } else {
            return arg1;
        }
    } else {
        return arg1;
    }
}

function check_operator_or(arg1, arg2) {
    return Boolean(arg1) ? arg1 : arg2;
}

function evaluateLogical(arg1, arg2, operator) {
    if (operator === '&&') {
        return check_operator_and(arg1, arg2);
    } else if(operator === '||'){
        return check_operator_or(arg1, arg2);
    } else if(operator === '??') {
        return check_operator_nullish(arg1, arg2);
    } else {
        return 'Operator not Found'
    }
}

console.log(evaluateLogical(5, 10, '&&')); // 10
console.log(evaluateLogical(null, 'default', '??')); // "default"
console.log(evaluateLogical(false, 42, '||')); // 42

