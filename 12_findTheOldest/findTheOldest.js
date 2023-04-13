const findTheOldest = function(array) {
    let buffer = 0;
    let Oldperson = []
    for(let i = 0; i < array.length; i++){
        for(let a = 0; a < array.length;a++){
            if(array[a].hasOwnProperty('yearOfDeath') == false){
                DateNow = new Date().getFullYear();
            }else{
                DateNow = array[a].yearOfDeath;
            }
            let age = DateNow - array[a].yearOfBirth;
            if(age > buffer){
                buffer = age;
                Oldperson = array[a]
            }
        }
    }
    return Oldperson;
};
// Do not edit below this line
module.exports = findTheOldest;
