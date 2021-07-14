function temperature(celsius){
  if(typeof celsius !== "number"){
    return "Write a valid number";
  } else if (celsius < -232){
    return "impossible to calculate, temperature under absolute zero - 0 Kelvin";
  } else {
  return (celsius * 1.8 + 32) + "°F or " + (celsius + 273.15) + "K"; //first one is the fahrenheit formula and after that the kelvin formula
  
  };
};

let result = temperature(36); //Here you can change the CELSIUS temperature
console.log(result);
