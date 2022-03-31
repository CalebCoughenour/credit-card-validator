function validate(numbers) {
  if ((numbers.trim().length === 0)) {
    return "This card is not valid";
  } else if (numbers.trim().length != 16 && numbers.trim().length != 15) {
    return "This card is not valid";
  }
}