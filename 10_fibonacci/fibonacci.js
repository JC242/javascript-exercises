const fibonacci = function(num) {
    num = parseInt(num);
    if(Math.sign(num) == -1){ return "OOPS"}
    let numArray = [];
    let result = 0;
    for(let i = 0; i < num; i++){
        if(i == 0){
            result = 1;
        }else{
            if(numArray[i-2] === undefined){
                result = numArray[i-1]
            }else{
                result = numArray[i-2];
                result = result + numArray[i-1];
            }
        }
        numArray.push(result);
    }
    return numArray[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
