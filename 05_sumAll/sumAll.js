const sumAll = function(firstNum,lastNum) {
    let number = 0;

    if(firstNum > lastNum){
        let buffer = firstNum;
        firstNum = lastNum;
        lastNum = buffer;
    }
    if((typeof(firstNum) != 'number') || (typeof(lastNum) != 'number'))
    {
        return "ERROR";
    }
    if(firstNum < 0 || lastNum < 0) {return "ERROR"}
    for(let i = firstNum; i <= lastNum ; i++){
        number += i;
    }
    return number;
};

// Do not edit below this line
module.exports = sumAll;
