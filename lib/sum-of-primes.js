//Function that accepts an integer argument and returns the sum of prime numbers between 1 and the integer(inclusive).
'use strict'

module.exports = {
  sumOfPrimes: function(n){
    //define our prime number checker
    if(typeof n == "number" && n !== (NaN || Infinity ) && n - Math.floor(n) === 0 && n > 0 && arguments.length == 1){
      function isPrime(value) {
          var i = 2;
          while(i < Math.floor(Math.sqrt(value)+1)) {
              if(value % i === 0) {
                  return false;
              }
              i ++;
          }
          return value > 1;
      }
      //create our test array and initialize variables
      var a = [], i =1,b = [];
      while(i <= n){
          a.push(i);
          i++;
      }
      //filter a and push primes to new array
      a.forEach(function(c){
          if(isPrime(c)){
              b.push(c);
          }
      });
      //find the sum of elements in array b(the sum of primes)
      return b.reduce(function(a,b){
          return a + b
      },0);
    }
    //check for when sum-of-prime function is called without an argument
    else if(arguments.length == 0){
        return "Please Call Function With One Argument Of Type - number";
    }
    //check for when sum-of-prime function is called without more than one argument
    else if(arguments.length > 1){
        return "Function Only Takes One Argument Of Type - number";
    }
    //check non numeric inputs, negative inputs, input zero
    else{
      var message;
      typeof n != "number" ? (message = "wrong argument type - " + typeof n) : ( n === 0 ? (message = "please call function with a numeric argument greater than zero") : (n < 0 ? (message = "Negative arguments not allowed") : (message = "wrong numeric argument type")));
      return message;
    }
  }
}
