const convertToCelsius = function(temp) {

  let celsius = (temp - 32) * (5 / 9);
  return round(celsius);
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = (temp * (9 / 5))  + 32;
  return round(fahrenheit);
};

const round = (num) =>{
  num  = Math.round(num * 10) / 10 ;
  return num;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
