function fizzBuzz(number) {
  if ( typeof number === 'number' && ( number % 1 ) === 0 ) {
    if (hasZeroReminder(number, 15)) {
      return "FizzBuzz";
    } else if (hasZeroReminder(number, 5)) {
        return "Buzz";
    } else if (hasZeroReminder(number, 3)) {
        return "Fizz";
    }
  }

  else {
    return "You need to write a number";
  }
};

function hasZeroReminder(number, dividend) {
  return number % dividend == 0;
};
