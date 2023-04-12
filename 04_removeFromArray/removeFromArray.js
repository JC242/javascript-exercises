const removeFromArray = function(array,...num) {
    
    for(i = 0; i < num.length;i++){
        let index = array.indexOf(num[i])

        while(index > -1){
            array.splice(index,1);

            index = array.indexOf(num[i]);
        }
    }
    return array;   
};

// Do not edit below this line
module.exports = removeFromArray;
