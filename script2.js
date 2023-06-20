//from Alex Zhelev
//task1
var birthYear = prompt("Въведете годината си на раждане");

var userCardNumber_firstDigit   = 0;
var userCardNumber_secondDigit  = 0;
var userCardNumber_thirdDigit   = 0;
var userCardNumber_fourthDigit  = 0;
var userCardNumber_fifthDigit   = 0;
var userCardNumber_sixthDigit   = 0;

var today       = new Date();
var cuurentYear = today.getFullYear();
var clientAge   = "";

if(birthYear < 1965){
    do{
        var randomOddDigit = Math.floor(Math.random() * 7) + 1; // Generate a random number between 1 and 7
    }

    while(randomOddDigit % 2 === 0); // Repeat until an odd digit is generated

    clientAge = cuurentYear - birthYear; //изцислява годините на клиента, базирайки се на годината която е въвел;
    
    userCardNumber_firstDigit = Math.floor(clientAge / randomOddDigit); //ensure that userCardNumber_firstDigit will be only INTEGER

    if(userCardNumber_firstDigit > 10){
        userCardNumber_firstDigit = Math.floor(Math.abs(userCardNumber_firstDigit) / 
                                    Math.pow(10, Math.floor(Math.log10(Math.abs(userCardNumber_firstDigit)))));
    }

    else if((userCardNumber_firstDigit % 2) === 0){
        userCardNumber_firstDigit += 1; 
    }

    else{
        userCardNumber_firstDigit;
    }

    console.log(`The first digit of card numebr is: ${userCardNumber_firstDigit}`);
}

else if(birthYear > 1965){
    do{
        var randomEvenDigit = Math.floor(Math.random() * 4) * 2 + 2; // Generate a random even number between 1 and 7
    }

    while(randomEvenDigit > 7); // Repeat until an even digit between 1 and 7 is generated

    clientAge = cuurentYear - birthYear; //изцислява годините на клиента, базирайки се на годината която е въвел;
    userCardNumber_firstDigit = Math.floor(clientAge / randomEvenDigit); //ensure that userCardNumber_firstDigit will be only INTEGER

    if(userCardNumber_firstDigit > 10){
        userCardNumber_firstDigit = Math.floor(Math.abs(userCardNumber_firstDigit) / 
                                    Math.pow(10, Math.floor(Math.log10(Math.abs(userCardNumber_firstDigit)))));
    }

    else if(userCardNumber_firstDigit % 2 !== 0){
        userCardNumber_firstDigit += 1; 
    }

    else{
        userCardNumber_firstDigit;
    }
    
    console.log(`The first digit of card numebr is: ${userCardNumber_firstDigit}`);
}

else if(birthYear == 1965){
    userCardNumber_firstDigit = 0;
    console.log(userCardNumber_firstDigit);
}

//task2 
if(userCardNumber_firstDigit == 0){
    userCardNumber_secondDigit = 9;

    console.log(`The second digit of card numebr is: ${userCardNumber_secondDigit}`);
}

else{
    const QUESTION_FOR_GENDER = prompt("Искате ли да си въведете пола? yes/no");

    if(QUESTION_FOR_GENDER == "yes"){
        var clientGender = prompt("Въведете пола си");

        if(clientGender == "male"){
            userCardNumber_secondDigit = 1;
        }

        else if(clientGender == "female"){
            userCardNumber_secondDigit = 3;
        }
    }

    else if(QUESTION_FOR_GENDER == "no"){
        do{
            userCardNumber_secondDigit = Math.floor(Math.random() * 9) + 1; // Generate a random number between 1 and 9
        }
    
        while (userCardNumber_secondDigit === 1 || userCardNumber_secondDigit === 3); // Repeat until a number other than 1 or 3 is generated       
    }

    console.log(`The second digit of card numebr is: ${userCardNumber_secondDigit}`);
}

//task3
if(clientAge < 18){
    var clientMotherYearOfBirth = parseInt(prompt("Въведете годината на раждане на майка Ви"));
    var clientFatherYearOfBirth = parseInt(prompt("Въведете годината на раждане на баща Ви"));

    //take last digit from year of birth
    var clientMotherYearOfBirth_LastDigit = clientMotherYearOfBirth % 10;
    var clientFatherYearOfBirth_LastDigit = clientFatherYearOfBirth % 10;
    
    if (clientMotherYearOfBirth_LastDigit === clientFatherYearOfBirth_LastDigit) {
        var clientMotherNextToLastDigit = parseInt((clientMotherYearOfBirth % 100) / 10); //take next to last digit from year of birth

        userCardNumber_thirdDigit = clientMotherNextToLastDigit;
    }

    else if(clientMotherYearOfBirth_LastDigit !== clientFatherYearOfBirth_LastDigit){
        userCardNumber_thirdDigit = clientFatherYearOfBirth_LastDigit;
    }
}

else if(clientAge > 18){
    userCardNumber_thirdDigit = 0;
}

console.log(`The third digid of card numebr is: ${userCardNumber_thirdDigit}`);

//task4
var clientHeight    = parseFloat(prompt("Въведете вашаат височина в сантиметри"));
var clentWeight     = parseFloat(prompt("Въведете вашето тегло в килограми"));

var bodyMassIndex   = (clentWeight / Math.pow(clientHeight / 100, 2)).toFixed(2);

if(bodyMassIndex < 16){
    console.log("Вашето тяло е под нормата");
    userCardNumber_fourthDigit = 1;
}

else if(bodyMassIndex >= 16 || bodyMassIndex <= 16.99){
    console.log("Вашето тяло е нормално");
    userCardNumber_fourthDigit = 2;
}

else if(bodyMassIndex >= 17 || bodyMassIndex <= 18.49){
    console.log("Вашето тяло е нормално - атлетично");
    userCardNumber_fourthDigit = 3;
}

else if(bodyMassIndex >= 18.5 || bodyMassIndex <= 24.99){
    console.log("Вашето тяло е нормално - атлетично");
    userCardNumber_fourthDigit = 4;
}

else if(bodyMassIndex >= 25 || bodyMassIndex <= 29.99){
    console.log("Вашето тяло е нормално");
    userCardNumber_fourthDigit = 5;
}

else if(bodyMassIndex >= 30 || bodyMassIndex <= 34.99){
    console.log("Вашето тяло е пред наднормено");
    userCardNumber_fourthDigit = 6;
}

else if(bodyMassIndex >= 35 || bodyMassIndex <= 34.99){
    console.log("Вашето тяло е наднормено - дебелo");
    userCardNumber_fourthDigit = 7;
}

else if(bodyMassIndex >= 40){
    console.log("Вашето тяло е наднормено - затлъстялo");
    userCardNumber_fourthDigit = 8;
}

console.log(`The fourth digit of card numebr is: ${userCardNumber_fourthDigit}`);

//task5
console.log("1) плодове и зеленчуци");
console.log("2) месо и месни продукти");
console.log("3) цигари и алкохол");
console.log("4) млечни продукти");
console.log("5) захарни изделия");

var indexOfChosenGoods = parseInt(prompt("Изберете от пет вида стоки коит оконсумирате най-много"));
var indexOfChoosenFrequency = parseInt(prompt("1) рядко, 2) понякога, 3) често"));

userCardNumber_fifthDigit = indexOfChosenGoods + indexOfChoosenFrequency;
console.log(`The fifth digit of card numebr is: ${userCardNumber_fifthDigit}`);

//task6
const ALL_NUMBERS_SUM = userCardNumber_firstDigit + 
                        userCardNumber_secondDigit +
                        userCardNumber_thirdDigit + 
                        userCardNumber_fourthDigit +
                        userCardNumber_fifthDigit;

if(ALL_NUMBERS_SUM > 10){
    var firstDigit  = Math.floor(ALL_NUMBERS_SUM / 10);
    var secondDigit = ALL_NUMBERS_SUM % 10;

    userCardNumber_sixthDigit = firstDigit + secondDigit;
}
else{
    userCardNumber_sixthDigit = ALL_NUMBERS_SUM;
}

var mergedCardNumber = parseInt(userCardNumber_firstDigit.toString() + 
                                userCardNumber_secondDigit.toString() + 
                                userCardNumber_thirdDigit.toString() +
                                userCardNumber_fourthDigit.toString() + 
                                userCardNumber_fifthDigit.toString() + 
                                userCardNumber_sixthDigit.toString());

console.log(`Клиентският Ви номер е: ${mergedCardNumber}`);