1. Return "This card number is not valid" if given an empty string
2. Return "This card number is not valid" if given an invalid card number length
3. Return "This card number is not valid" if first digits are invalid
4. Return "This card number is not valid" if luhn algorithm sum of input does not end in a 0
5. Return "This card number is valid" if it is a valid length for a valid company and is a valid number

validate()

Test: "It will return "This card number is not valid" if given an empty string"
Code: validate(" ");
Expected output: "This card number is not valid"

Test: "Return "This card number is not valid" if given an invalid card number length"
Code: validate("1234567890")
Expected output: "This card number is not valid"

Test: "Return "This card number is not valid" if luhn algorithm sum of input does not end in a 0"
Code: validate("4102080880435620")
Expected output: "This card number is not valid"



luhn()

Test: "Return 52 when given '4102080880435620'"
Code: luhn("4102080880435620")
Expected output: 52