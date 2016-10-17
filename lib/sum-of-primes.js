//Function that accepts an integer argument and returns the sum of prime numbers between 1 and the integer(inclusive).
'use strict'
//function to check if a number is a prime number
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
//function to get range
function range(start, stop){
    var rangeArr = [];
    while(start <= stop){
        rangeArr.push(start);
        start++;
    }
    return rangeArr;
}
// sum all elements in a numeric array function
function arrayReduce(theArray){
    //find the sum of elements in array b(the sum of primes)
    return theArray.reduce(function(a,b){
      return a + b
    },0);
}
// create a module function
module.exports = {
  sumOfPrimes: function(n){
    //define our prime number checker
    if(typeof n == "number" && n !== (NaN || Infinity ) && n - Math.floor(n) === 0 && n > 1 && arguments.length == 1){
      
      //create our test array and initialize variables
      var a = range(1, n), b = [];
      //filter a and push primes to new array
      a.forEach(function(c){
          if(isPrime(c)){
              b.push(c);
          }
      });
      return arrayReduce(b);
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
      if(typeof n != "number"){
          message = "wrong argument type - " + typeof n
      }
      else if(n == 1 || n == 0){
          message = "please call function with a numeric argument greater than " + n
      }
      else if(n < 0){
          message = "Negative arguments not allowed"
      }
      else{
          message = "wrong numeric argument type";
      }
      //typeof n != "number" ? (message = "wrong argument type - " + typeof n) : ( n === 0 ? (message = "please call function with a numeric argument greater than zero") : (n < 0 ? (message = "Negative arguments not allowed") : (message = "wrong numeric argument type")));
      return message;
    }
  }
}
