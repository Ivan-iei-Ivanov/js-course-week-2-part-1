var firstDigit   = 0;
var secondDigit  = 0;
var thirdigit    = 0;
var forthDigit   = 0;
var fifthDigit   = 0;
var sixthDigit   = 0;

var birthYear    = prompt("Моля въведете годината си на раждане:");
var clientGender = ""; //male, female, other
var clientAge    = 0;


if (birthYear < 1965) {
  firstDigit = 1;
} else if (birthYear > 1965) {
  let clientAge = 2023 - birthYear;
  let randomNumber = Math.floor(Math.random() * 7) + 1;
  firstDigit = clientAge / randomNumber;
  if (firstDigit % 2 === 0) {
    firstDigit += 1;
  }
} else {
  firstDigit = 0;
}

if (firstDigit >= 10) {
  firstDigit = Math.floor(firstDigit / 10);
}

if (clientGender === "male"){
    secondDigit = 1;
} else if (clientGender === "female"){
    secondDigit = 3;
} else {
    do {
    randomNumberForGender   = Math.floor(Math.random() * 9) + 1;
    } while (randomNumberForGender != 1 && 3);
}

