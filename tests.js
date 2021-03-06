'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum-of-primes.js');

describe("Test that the sum of prime gives the correct answers for each test case", function(){
  //interger Input Type Test Case
  it("should return an integer", function(){
    assert(
      typeof lib.sumOfPrimes(50) == "number"
    );
  });
  //the is Prime function should return an true or false 
  it("should return a boolean", function(){
    assert(
      lib.isPrime(20) == false
    );
    assert(
      lib.isPrime(7) == true
    );
  });
  //the range function should return an array
  it("should return an array", function(){
    assert(
      Array.isArray(lib.range(20)) == true
    );
  });
  /*the arrayReduce function should return an integer greater than or equal to 2
  it("should return an integer greater than or equal to two", function(){
    assert(
      typeof lib.arrayReduce(2) == "number" && lib.arrayReduce(2) >= 2
    );
  });
  */
  //PreEstablished Output Test Case
  it("should return 17 if the argument input  is 10", function() {
    assert(
      lib.sumOfPrimes(10) == 17
    );
    assert(
      lib.sumOfPrimes(5) == 10
    );
    assert(
      lib.sumOfPrimes(6) == 10
    );
  });
  //Check For Wrong Input Type
  it("should return 'wrong argument type - <type>' for wrong input arguments", function() {
    assert(
      lib.sumOfPrimes("") == "wrong argument type - string"
    );
    assert(
      lib.sumOfPrimes({} || null || new Date() || [])  == "wrong argument type - object"
    );
    assert(
      lib.sumOfPrimes(true || false) == "wrong argument type - boolean"
    );
    assert(
      lib.sumOfPrimes(undefined) == "wrong argument type - undefined"
    );
  });

  //Test Case For Input one - this  test can be combined with the one immediately below leave split for further clarity
  it("should return 'please call function with a numeric argument greater than 1", function() {
    assert(
      lib.sumOfPrimes(1) == "please call function with a numeric argument greater than 1"
    );
  });
  //Test Case For Input Zero - this  test can be combined with the one immediately above leave split for further clarity
  it("should return 'please call function with a numeric argument greater than 0", function() {
    assert(
      lib.sumOfPrimes(0) == "please call function with a numeric argument greater than 0"
    );
  });
  //Test Case For Negative Numbers
  it("should return 'negative arguments not allowed'", function(){
  	assert(
        lib.sumOfPrimes(-10) == "Negative arguments not allowed"
  	);
  });
  //Test Case For Empty Or No Argument
  it("should return 'Please Call Function With One Argument Of Type - number'", function(){
    assert(
        lib.sumOfPrimes() == "Please Call Function With One Argument Of Type - number"
    );
  });
  //Test Case For More Than One Argument
  it("should return 'Function Only Takes One Argument Of Type - number'", function(){
    assert(
        lib.sumOfPrimes(50, 55) == "Function Only Takes One Argument Of Type - number"
    );
  });
  //Test For Float NaN and Infinity as Input
  it("should return 'wrong numeric argument type'", function(){
    assert(
      lib.sumOfPrimes(50.33 || NaN || Infinity) == "wrong numeric argument type"
    );
  });
  //Test For Runtime used getMilliseconds before not sure of accuracy, change to getTime
  it("Time taken to execute function for an input argument of 1000 should not exceed 10ms", function(){
    var t0 = new Date().getTime().toFixed(2);
    lib.sumOfPrimes(1000);
    var t1 = new Date().getTime().toFixed(2);
    assert(t1 - t0 < 10);
  });
});