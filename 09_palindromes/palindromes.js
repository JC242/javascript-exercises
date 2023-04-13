const palindromes = function (string) {
    const arrayWord = filter(string);
    let reverseWord = arrayWord.slice().reverse().join("");
    let word = arrayWord.slice().join("");
  
    if(reverseWord == word){return true}
    return false;
};

const filter = string =>{
    let characters = ["1" , "2" , "3", "4","5" ," 6","7","8","9","0"
,"!","@","#","$","%","^","&","*",".",","," "];

    let word = string.toLowerCase().split("");
    for(let i =0; i < characters.length; i++){
        if(word.includes(characters[i])){
            let index = word.indexOf(characters[i])
            while(index > -1){
                word.splice(index,1);
    
                index = word.indexOf(characters[i]);
            }
        }
    }
    return word    
}

// Do not edit below this line
module.exports = palindromes;
