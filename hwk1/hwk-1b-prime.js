var fs = require('fs');
var output = 'prime.txt';

function listPrimes() {
  var count = 100;
  var primes = [];

  for (var n = 2; count > 0; n++) {
    if (isPrime(n)) {
        primes.push( n );
        --count;
    }
  }

  return primes;
}

function isPrime( n ) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

fs.writeFileSync( output, listPrimes());