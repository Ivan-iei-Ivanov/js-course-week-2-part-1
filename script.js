my initial solution

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

конфигурационни константи

годината спрямо която определяме, 
какъв ще бъде типът на потребителя



const CONFIGURATION_CUSTOMER_YEAR = 1965;

// Всички стойности на клиентската карта
var customCardFirstDigit   = 0;
var customCardSecondDigit  = 0; 
var customCardThirdDigit   = 0; 
var customCardFourthDigit  = 0; 
var customCardFifthDigit   = 0; 
var customCardSixtDigit    = 0; 

function generateFirstDigit() {

    var generatedDigit   = 0; 

    // Първа цифра
    const customerYearOfBirth   = 1992;
    const currentYear           = (new Date()).getFullYear(); // ?? какво забога е това
    const customerAge = currentYear - customerYearOfBirth;

    function getFirstDigit() {

        const customerRandomCoeficient = getRandom(1, 7);
        return parseInt(customerAge / customerRandomCoeficient);
    }

    function isProcessable(number) {
        return isOdd(number) || (number >= 10);
    }

    // цифрата трябва да е ЧЕТНА
    if(customerYearOfBirth > CONFIGURATION_CUSTOMER_YEAR) {

        do {
            generatedDigit = getFirstDigit();
        } while(isProcessable(generatedDigit))
    }

    // цифрата трябва да е НЕЧЕТНА
    if(customerYearOfBirth < CONFIGURATION_CUSTOMER_YEAR) {

        do {
            generatedDigit = getFirstDigit();
        } while(isEven(generatedDigit) || (generatedDigit >= 10))
    }

    return generatedDigit;
}
function generateThirdDigit(customerAge, motherBirthYear, fatherBirthYear) {
  let thirdDigit = 0;
  if (customerAge < 18) {
      if (motherBirthYear % 10 === fatherBirthYear % 10) {
          thirdDigit = Math.floor(motherBirthYear / 10) % 10;
      } else {
          thirdDigit = fatherBirthYear % 10;
      }
  }
  return thirdDigit;
}
