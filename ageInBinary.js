function ageInBinary(age) {
    if(isNaN(age)) {
        return('not a number');
    }
    else if(age > 140 || age < 0) return('invalid age');
    else if(!Number.isInteger(age)) return('please enter a whole number');
    let binaryAge = [];
    if(age === 0) return '0';
    while(age > 0) {
        var remain = age % 2;
        age = parseInt(age/2);
        binaryAge.unshift(remain.toString());
    }
    return binaryAge.join('');
}

console.log(ageInBinary(30.343));