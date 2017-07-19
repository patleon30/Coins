
var input = document.getElementById("input");
var button = document.getElementById("button")
button.addEventListener("click", function() {
  coinCounter(input.value);
})

function coinCounter (input) {
console.log(input)

var coinPurse = {quarters: 0, dimes: 0, nickels: 0 ,pennies: 0};  
var remainder;  
  
   
  coinPurse.quarters = Math.round(parseInt(input/.25));
  remainder = (input - (coinPurse.quarters * .25)).toFixed(2); 
  coinPurse.dimes = Math.round(parseInt(remainder/.10)); 
  remainder = (remainder - (coinPurse.dimes * .10)).toFixed(2);
  coinPurse.nickels = Math.round(parseInt(remainder/.05));
  remainder = (remainder - (coinPurse.nickels * .05)).toFixed(2);
  coinPurse.pennies = Math.round(parseInt(remainder/.01));
  remainder = (remainder - (coinPurse.pennies * .01)).toFixed(2);
  console.log(remainder, coinPurse)

  return coinPurse;
  }

 