var firstDigit   = 0;
var birthYear    = prompt("Моля въведете годината си на раждане:");
var clientGender = "";
var clientAge    = 0;
var randomNumber = 0;
// if (birthYear < 1965) {
//     firstDigit = 1;
// } else if (birthYear > 1965) {
//     firstDigit = 2;
// } else if (birthYear = 1965) {
//     firstDigit = 0;
// }
// if (birthYear != 1965){

// }


if (birthYear < 1965) {
  firstDigit = 1;
} else if (birthYear > 1965) {
  let clientAge = 2023 - birthYear;
  let randomNumber = Math.floor(Math.random() * 7) + 1;
  firstDigit = age / randomNumber;
  if (firstDigit % 2 === 0) {
    firstDigit += 1;
  }
} else {
  firstDigit = 0;
}

if (firstDigit >= 10) {
  firstDigit = Math.floor(firstDigit / 10);
}


