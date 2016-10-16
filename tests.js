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
  //it should return a positive integer not really neccessary, trying to complete ten tests
  it("should return a positive integer", function(){
    assert(
      lib.sumOfPrimes(60) > 0
    );
  });
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
  //Test Case For Input Zero
  it("should return 'please call function with a numeric argument greater than zero", function() {
    assert(
      lib.sumOfPrimes(0) == "please call function with a numeric argument greater than zero"
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