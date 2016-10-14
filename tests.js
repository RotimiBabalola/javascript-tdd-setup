'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum-of-primes.js');

describe("Test that the sum of prime gives the correct answers for each test case", function(){
  //interger Input Type Test Case
  it("should return an integer", function(){
    assert(
      typeOf(lib.sumOfPrimes(50)) == "number"
    );
  });
  //Float Input Type Test Case
  it("should not accept float values", function(){
    assert(
      typeOf(lib.sumOfPrimes(50.33)) == "Please use an integer"
    );
  });
  //PreEstablished Output Test Case
  it("should return 17 if the input is 10", function() {
    assert(
      lib.sumOfPrimes(10) == 17
    );
  });
  //Check For Wrong Input Type
  it("should print 'wrong input type - <type>' for wrong inputs", function() {
    assert(
      lib.sumOfPrimes([]) == "wrong input type - array"
    );
    assert(
      lib.sumOfPrimes("") == "wrong input type - string"
    );
    assert(
      lib.sumOfPrimes({}) == "wrong input type - object"
    );
    assert(
      lib.sumOfPrimes(true) == "wrong input type - boolean"
    );
    assert(
      lib.sumOfPrimes(false) == "wrong input type - boolean"
    );
    assert(
      lib.sumOfPrimes(null) == "wrong input type - null"
    );
    assert(
      lib.sumOfPrimes(undefined) == "wrong input type - undefined"
    );
  });
  //Test Case For Input Zero
  it("should return 'please use a number greater than zero' if input is zero", function() {
    assert(
      lib.sumOfPrimes(0) == "please use a number greater than zero"
    );
  });
  //Test Case For Negative Numbers
  it("should return 'negative number not allowed'", function(){
  	assert(
        lib.sumOfPrimes(-10) == "Negative inputs not allowed"
  	);
  });
});