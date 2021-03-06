const MAX_SAFE_INT = 9007199254740991;

function isPrime(value) {
  // Return quickly for values 1, 2, 3
  if (value <= 3 && value > 0) return true;
  // Return quickly if divisible by 2 or 3
  if (value % 2 == 0 || value % 3 == 0) return false;
  // The following is an optimization as primes > 3 are of the form 6k +/- 1,
  // where k is an integer > 0
  // Consulted this wikipedia article and only variable names are different from example code.
  // https://en.wikipedia.org/wiki/Primality_test#JavaScript
  let i = 5;
  // only need to test up to <= sqrt(value)
  while (Math.pow(i, 2) <= value) {
    // Using %i and %(i+2) accounts for +/-1 variation in form described above
    if (value % i == 0 || value % (i + 2) == 0) return false;
    i += 6;
  }
  return true;
}

function isEven(value) {
  // Value is even if 2 can be divided evenly into it
  return value % 2 == 0;
}

function hasOddDigit(value) {
  // Cast value to string, and test whether an odd digit is found.
  const stringValue = "" + value;
  return /[13579]/.test(stringValue);
}

function makeSequenceItem(value) {
  // Create keyed objects to make for easier filtering in application.
  return {
    value: value,
    prime: isPrime(value),
    even: isEven(value),
    oddDigit: hasOddDigit(value),
  };
}

function generateFibonacci(filter) {
  // Fibonacci Sequence
  // F_0 = 1, F1 = 1
  // F_n = F_n-2 + F_n-1 where n > 1
  let value = 1;
  let sequence = [];
  let twoBack = 0;
  let oneBack = 1;
  while (1) {
    value = oneBack + twoBack;
    // Need to set value first to compare to max value
    // and decide whether to break.
    if (value > MAX_SAFE_INT) break;
    // Update lookback values.
    twoBack = oneBack;
    oneBack = value;
    // add the sequence items.
    sequence.push(makeSequenceItem(value));
  }
  return sequence;
}

function filterValues(values, filters) {
  // If no filters return first 50.
  if (filters.length == 0) return values.slice(0, 50);
  // Apply limit of 50 prior to filtering
  let result = values.slice(0, 50);
  // Apply each filter sequentially.
  filters.forEach((filter) => {
    result = result.filter((item) => item[filter] === true);
  });
  return result;
}

// Export functions and constants for use in test suite
export {
  filterValues,
  generateFibonacci,
  isPrime,
  isEven,
  hasOddDigit,
  MAX_SAFE_INT,
};
