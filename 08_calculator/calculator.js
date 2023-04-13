const add = function(...num) {
  let result = 0;
  for(let i = 0; i < num.length; i++){
    result += num[i];
  }
  return result;
};

const subtract = function(...num) {
	let result = 0;
  for(let i = 0; i < num.length; i++){
    result = Math.abs(result - num[i]);

  }
  return result;
};

const sum = function(array) {
	let result = 0;
  for(let i = 0; i < array.length; i++){
    result += array[i];
  }
  return result;
};

const multiply = function(array) {
  if(array.length < 1){ return 0;}
  let result = array[0];
  for(let i = 1; i < array.length; i++){
    result = result * array[i];
  }
  return result;
};

const power = function(...num) {
	let result = num[0];
  for(let i =  1; i < num.length; i++){
    result = result ** num[i];
  }
  return result;
};

const factorial = function(num) {
  if(num == 0) { return 1; }
  let result = 1;
  for(let i = 1; i <= num; i++){
    result = result * i; 
  }
  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
