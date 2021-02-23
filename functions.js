/* Opdracht 1 */
// Schrijf een functie die drie parameters verwacht en deze drie getallen bij elkaar optelt en teruggeeft.
// ---- Verwachte uitkomsten:
// 3, 4, 5 geeft 12
// 11, 3, 9 geeft 23
function multiply(length, height, width) {
    return length + height + width;
}

outcomeOne = multiply(3,4,5);
outcomeTwo = multiply(11,3,9)
console.log(outcomeOne, outcomeTwo)

/* Opdracht 2 */
// Schrijf een functie die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Je mag hier geen String Object methoden voor gebruiken.
// ---- Verwachte uitkomsten:
// "abra", "cadabra" geeft "abracadabra"
function wizard(word1, word2) {
    return word1 + word2;
}
console.log(wizard('abra', 'cadabra'))

/* Opdracht 3 */
// Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// "bril", "*" geeft "*bril*"
// "beep", "_" geeft "_beep_"
// "kaas", "Q" geeft "QkaasQ"

function wordsAndCaracters (word, caracter) {
    return caracter + word + caracter;
}
const word1 = wordsAndCaracters('bril', '*')
const word2 = wordsAndCaracters('beep', '_')
const word3 = wordsAndCaracters('kaas', 'Q')
console.log(word1, word2, word3)
/* Opdracht 4 */

// Schrijf een functie die een array van strings verwacht. De functie geeft
// alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken.
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c"] geeft "abc"
function stickTogether (wordArray) {
    let output = ""
    for (let i = 0; i < wordArray.length; i++) {
        output = output + wordArray[i];
    }
    return output;
}
const words = stickTogether(['a', 'b', 'c']);
const words2 = stickTogether(['abra', 'cadabra'])
console.log(words, words2)

/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft
// ---- Verwachte uitkomsten:
// ["Nick, Nova, Mitchel, Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Nick", "Nova", "Mitchel", "Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E, en F!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E en F!"

function greeting(stringsArray) {
    let greeting = "Hoi ";

    for (let i = 0; i < stringsArray.length; i++) {
        // als dit de laatste entry is, voeg dan het uitroepteken toe
        if (i === stringsArray.length - 1) {
            // de return zorgt ervoor dat er niet meer naar de andere if-statements gekeken wordt
            return greeting = greeting + " en " + stringsArray[i] + "!";
        }
        // als de array maar twee namen bevat of we zijn bij de één-na-laatste naam, voeg dan alleen de naam toe
        if (stringsArray.length === 2 || i === stringsArray.length - 2) {
            greeting = greeting + stringsArray[i];
        } else {
            // in andere alle gevallen voegen we een komma en spatie toe
            greeting = greeting + stringsArray[i] + ", ";
        }
    }
    return greeting;
}

const greeting1 = greeting(["Piet", "Henk"]);
const greeting2 = greeting(["A", "B", "C", "D", "E", "F"]);

console.log(greeting1)