// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
  sumOfPrimes: function(n){
    //define our prime number checker
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
}