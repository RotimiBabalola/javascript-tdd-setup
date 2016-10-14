'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum-of-primes.js');

describe("Test that the sum of prime gives the correct answers for each test case", function() {
  it("should return 17", function() {
    assert(
      lib.sumOfPrimes(10) == 17;
    );
  });
  it("should print wrong input for wrong inputs", function() {
    assert(
      lib.sumOfPrimes(n) == "wrong input";
    );
  });
  it("should fail if input is zero", function() {
    assert(
      lib.sumOfPrimes(0) == "please use a number greater than zero";
    );
  });
  it("should not return an integer", function(){
  	assert(
  		typeOf(lib.sumOfPrimes(50)) == "number";
  	);
  });
  it("should return negative number not allowed", function(){
  	assert(
        lib.sumOfPrimes(-10) == "Negative inputs not allowed";
  	);
  });
});