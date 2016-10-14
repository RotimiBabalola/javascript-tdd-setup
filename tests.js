'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum-of-primes.js');

describe("Test that the sum of prime gives the correct answers for each test case", function(){
  it("should return an integer", function(){
    assert(
      typeOf(lib.sumOfPrimes(50)) == "number"
    );
  });
  it("should not accept float values", function(){
    assert(
      typeOf(lib.sumOfPrimes(50.33)) == "Please use an integer"
    );
  });
  it("should return 17 if the input is 10", function() {
    assert(
      lib.sumOfPrimes(10) == 17
    );
  });
  it("should print 'wrong input type' for wrong inputs", function() {
    assert(
      lib.sumOfPrimes([]) == "wrong input type"
    );
    assert(
      lib.sumOfPrimes("") == "wrong input type"
    );
    assert(
      lib.sumOfPrimes({}) == "wrong input type"
    );
    assert(
      lib.sumOfPrimes(true) == "wrong input type"
    );
    assert(
      lib.sumOfPrimes(false) == "wrong input type"
    );
    assert(
      lib.sumOfPrimes(null) == "wrong input type"
    );
    assert(
      lib.sumOfPrimes(undefined) == "wrong input type"
    );
  });
  it("should fail if input is zero", function() {
    assert(
      lib.sumOfPrimes(0) == "please use a number greater than zero"
    );
  });
  it("should return negative number not allowed", function(){
  	assert(
        lib.sumOfPrimes(-10) == "Negative inputs not allowed"
  	);
  });
});