// -------------------------------  BEGINNER

/* Opdracht 1 */
// Schrijf een functie die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// "Nova" geeft "Hoi Nova!"
// "Nick" geeft "Hoi Nick!"

function greeting(name) {
    return "Hoi " + name + "!"
}
console.log(greeting('Nova'))

/* Opdracht 2 */
// Schrijf een functie die een hoeveelheid minuten verwacht (als een getal) en teruggeeft
// hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// 1 geeft 60
// 3 geeft 180
// 23 geeft 1840
function getSeconds(minutes) {
    return minutes * 60
}
console.log(getSeconds(1));

/* Opdracht 3 */
// Schrijf een functie die een cijfer verwacht en teruggeeft of het cijfer groter is
// dan nul
// ---- Verwachte uitkomsten:
// -3 geeft false
// 0 geeft false
// 300 geeft true
function isBiggerThan(number) {
    const biggerThanZero = number > 0;
    return biggerThanZero;
}

const outcomeOne = isBiggerThan(-3);
const outcomeTwo = isBiggerThan(300)
console.log('ONE', outcomeOne, 'TWO', outcomeTwo)

/* Opdracht 4 */
// Schrijf een functie die twee getallen verwacht en teruggeeft of ze, opgetelt, gróter zijn dan 100.
// ---- Verwachte uitkomsten:
// 1 en 23 geeft false
// 8 en 92 geeft false
// 89 en 14 geeft true
function biggerThan100(number1, number2) {
    const sum = number1 + number2
    const biggerThanHundred = sum > 100
    return biggerThanHundred;
}
const outcomeSum = biggerThan100(89, 14)
const outcomeSum2 = biggerThan100(1, 23);
console.log(outcomeSum, outcomeSum2)

/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht. Hoe lang die array is, weet je niet van tevoren,
// dus het moet werken voor alle lengtes. Zelfs voor een lengte van 100 (dus niet één voor één uitschrijven!)
// De functie geeft alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken zoals .concat()
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c", "d", "e"] geeft "abcde"
function joinString(stringArray) {
    let outputString = ""
    for (let i = 0; i < stringArray.length; i++) {
        const string = stringArray[i]
        outputString = outputString + string;
    }
    return outputString
}
console.log(joinString(['abra', 'cadabra']))
// -------------------------------  INTERMEDIATE

/* Opdracht 6 */
// Schrijf een functie die een woord verwacht en dit omgedraait teruggeeft. Je kunt dit zowel handmatig
// als met ingebouwde string- en array methoden doen. Probeer beide manieren uit te werken als je
// graag wil oefenen!
// ---- Verwachte uitkomsten:
// "koekje" geeft "ejkeok"
// "vrienden" geeft "nedneirv"
function reverseString(string) {
    const stringArray = string.split("");
    const reversedArray = stringArray.reverse();
    const outputString = reversedArray.join("");
    return outputString;
}
const koekje = reverseString('Koekje')
const vrienden = reverseString('Vrienden')
console.log(koekje, vrienden)

function reversStringLoop(string) {
let outputString = "";
for (let index = string.length - 1; index >= 0; index--) {
    const letter = string[index];
    outputString = outputString + letter;
}
return outputString;
}
const outputLoop = reversStringLoop("koekje");
console.log(outputLoop)

/* Opdracht 7 */

// Schrijf een functie die een woord verwacht checkt of dit woord een palindroom is. Een palindroom is een
// spiegelwoord: het is hetzelfde zowel vooruit als achterstevoren. Als dit zo is, geeft de functie true terug,
// zo niet, dan false.
// ---- Verwachte uitkomsten:
// "lepel" geeft true
// "madam" geeft true
// "vrienden" geeft false
function isPalinDrome(word) {
    const reverseWord = reverseString(word);
    const palinDrome = reverseWord === word;
    return palinDrome
}
const firstWord = isPalinDrome('lepel')
const secondWord = isPalinDrome('madam')
const thirdWord = isPalinDrome('vrienden')
console.log(firstWord, secondWord, thirdWord)

/* Opdracht 8 */
// Schrijf een functie die een string en een letter verwacht. De functie telt hoe vaak die letter voorkomt in
// de string en geeft dit terug. Je mag hiervoor geen string- of array-methoden gebruiken.
// ---- Verwachte uitkomsten:
// "Hans en marietje lopen naar de supermarkt" en "e" geeft 6
// "Hans is zijn mondkapje vergeten" en "a" geeft 2
function countLetters(string, letter) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        const letterInSentence = string[i];
        const sameLetter = letterInSentence === letter;
        if (sameLetter) {
            count = count + 1;
        }
        return count;
    }
}
const stringOne = countLetters('Hans en Magrietje lopen naar de supermarkt', 'e');
console.log(stringOne)
// ------------------------------- ADVANCED (optionele bonusopdrachten)

/* Opdracht 9 */
// Schrijf een functie genaamd lastEntry die de laatste entry van een array teruggeeft.
// Als de parameter n wordt meegegeven, worden de laatste n entries van de array teruggegeven.
// ---- Verwachte uitkomsten:
// lastEntry([3, 6, 9, 17, 4, 6, 25, 4]) geeft 4
// lastEntry([46, 65, 34, 204, 190, 89], 3) geeft [204, 190, 89]
function lastEntry(array, count = 1) {
    const firstIndexToInclude = array.length - count;
    // using array slice to "cut the array in half" at the right index
    const outputArray = array.slice(firstIndexToInclude);
    return outputArray;
}
const outputArr1 = lastEntry([3, 6, 9, 17, 4, 6, 25, 4]);
const outputArr2 = lastEntry([46, 65, 34, 204, 190, 89], 3);
console.log(outputArr1, outputArr2)
/* Opdracht 10 */
// Schrijf een functie die een array van getallen verwacht. De functie geeft het hoogste
// getal in de array terug. Je mag hier geen array-object methoden voor gebruiken zoals .max()
// ---- Verwachte uitkomsten:
// [3, 6, 9, 17, 4, 6, 25] geeft 25
// [46, 65, 34, 204, 190, 89] geeft 204
function highestNumber(numberArray) {
    let number = 0;
    for (let i = 0; i < numberArray.length; i++) {
    const numberInLoop = numberArray[i];
    const highestNumberSoFar = numberInLoop > number;
    if (highestNumberSoFar) {
        number = numberInLoop;
    }
    }
    return number;
}
const highest1 = highestNumber([3, 6, 9, 17, 4, 6, 25])
console.log(highest1)

/* Opdracht 11 */
// Schrijf een functie die geen parameters verwacht en de getallen 1 tot 100 print.
// Voor getallen die deelbaar zijn door 3 print je "Fizz" in plaats van het getal.
// Voor getallen die deelbaar zijn door 5 print je "Buzz" in plaats van het getal.
// Voor getallen die zowel deelbaar zijn door 3 als door 5, print je "FizzBuzz".
function changeNumbersIntoWords() {
    for (let index = 0; index <= 100; index++) {
        const number = index;
        const divisbleBy3 = number % 3 === 0;
        const divisbleBy5 = number % 5 === 0;
        if (divisbleBy3 && !divisbleBy5) {
            console.log('Fizz')
        }
        else if (divisbleBy5 && !divisbleBy3)
            console.log('Buzz');
        else if (divisbleBy3 && divisbleBy5) {
            console.log("FizzBuzz")
        }
        else {
            console.log(number)
        }

    }
}
changeNumbersIntoWords();
// ---- Verwachte uitkomst:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.