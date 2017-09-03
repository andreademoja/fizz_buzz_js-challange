function hasZeroReminder(number, dividend) {
  return number % dividend == 0;
}

function fizzBuzz(number) {
  if (typeof number==='number' && (number%1)===0) {
    if (number % 15 == 0) {
      return "FizzBuzz";
    } else if (number % 5 == 0) {
        return "Buzz";
    } else if (number % 3 == 0) {
        return "Fizz";
    }
  }
  else {
    return "Enter an integer"
    }
  };
