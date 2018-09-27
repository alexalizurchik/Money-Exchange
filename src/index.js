// PLEASE DON'T change function name
module.exports = function makeExchange(num) {
   let exchange = {};
  
      
  if (num <= 0) {
    return exchange;
  }
    
  if (num >= 10000) {
    exchange.error = "You are rich, my friend! We don't have so much coins for exchange"
     
    return exchange;
  }
  
  let rate = {
    H: 50,
    Q: 25,
    D: 10,
    N: 5,
    P: 1
  };
  
  for (let key in rate) {
    exchange[key] = getCountOfCoins(num, rate[key]);
    num -= exchange[key] * rate[key];
    
    if (exchange[key] === 0) {
      delete exchange[key];
    }
  }
    
  return exchange;
}

function getCountOfCoins(coins, rate) {
  return Math.trunc(coins / rate);
}