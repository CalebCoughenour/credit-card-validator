function validate(numbers) {
  if ((numbers.trim().length === 0)) {
    return "This card is not valid";
  } else if (numbers.trim().length != 16 && numbers.trim().length != 15) {
    return "This card is not valid";
  } else {

  }
}

function luhn(numbers) {
  let digits = numbers.split("");

  let doubledDigits = digits.map(function(digit) {
    return parseInt(digit);
  });

  doubledDigits = doubledDigits.map(function(digit, index) {
    if (index % 2 !== 0) {
      return digit * 2;
    } else {
      return digit;
    }
  });

  doubledDigits = doubledDigits.map(function(digit) {
    if (digit > 9) {
      return (digit % 10) + Math.floor(digit / 10);
    } else {
      return digit;
    }
  });

  let sum = 0;
  doubledDigits.forEach(function(digit) {
    sum += digit;
  });

  return sum;
}