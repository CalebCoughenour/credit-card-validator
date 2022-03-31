function validate(numbers) {
  if ((numbers.trim().length === 0)) {
    return "This card is not valid";
  } else if (luhn(numbers) % 10 !== 0) {
    return "This card is not valid";
  } else if ((numbers.charAt(0) === "4" || numbers.charAt(0) === "5" || numbers.charAt(0) === "6") && numbers.length === 16) {
    return "This card is valid";
  } else if ((numbers.slice(0, 2) === "34" || numbers.slice(0, 2) === "37") && numbers.length === 15) {
    return "This card is valid"; 
  } else {
    return "This card is not valid";
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