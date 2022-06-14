// L'utente indica un livello di difficoltà (PROMPT) 
// in base al quale decidiamo il range di numeri possibili del gioco:
// Difficoltà 1 => tra 1 e 100
// Difficoltà 2 => tra 1 e 81
// Difficoltà 3 => tra 1 e 49
// Se utente inserisce numero non richiesto si assegna la difficoltà default.
// Il minRange (1) è comune a tutti i livelli, mentre il maxRange varia (SWITCH)
// Il computer deve generare 16 bomb-numbers, nello stesso range della difficoltà scelta (FUNCTION)
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente inserisce ogni volta un nuovo numero (PROMPT)
// Se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomb,
// dunque il gioco finisce con un messaggio di game over.
// Al termine della partita il software deve comunicare il punteggio, 
// ovvero il numero di tentativi prima che si scegliesse un bomb-number.
// Altrimenti il gioco va avanti fino a quando si raggiunge il numero massimo di tentativi (maxRange-bombs)
// In questo caso il gioco finisce con un messaggio di vittoria. (FUNCTION)


// Ask the user the difficulty level of the game
const userLevel = parseInt(prompt("Scegli il livello di difficoltà: 1, 2 o 3"))

// Calc the different level ranges
let maxRangeLevel; 
const minRangeLevel = 1;

switch(userLevel) {
    case 1:
        maxRangeLevel = 100;
        break;
    case 2:
        maxRangeLevel = 81;
        break;
    case 3:
        maxRangeLevel = 49;
        break;
    default:
        maxRangeLevel = 60;
        break;
}

// Bomb-numbers qty
const bombNumbers = 16;
const bombs = generateBombNumbers(bombNumbers, minRangeLevel, maxRangeLevel);

// Max attempts qty
const maxAttempts = maxRangeLevel - bombs;

safeNumbers();

// FUNCTIONS //


// Function that generates the 16 bomb-numbers
function genRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Function that push the bomb numbers in the bombsArray
function generateBombNumbers(bombNumbers, minRangeLevel, maxRangeLevel) {
    const bombsArray = [];

    while (bombsArray.length < bombNumbers) {
        const randomBomb = genRandomNumber(minRangeLevel, maxRangeLevel);

        // Push the random bombNumber in the bombsArray - if not already present
        if (!bombsArray.includes(randomBomb)) {
            bombsArray.push(randomBomb)
        }
    }

    return bombsArray;
}

// Function that checks if the userNumber is a safeNumber or a bombNumber
function safeNumbers() {
    const safeArray = [];


    while (safeArray.length < maxAttempts) {

        const userNumber = parseInt(prompt("Digita un numero"));
        console.log("numero scelto da user", userNumber);


        // If the numberUser is the same as an element of the bombsArray - game over
        if (bombsArray.includes(userNumber)) {
            alert("Hai perso")
        }


    }
    console.log("array con numeri scelti da user", safeArray);
}

console.log("livello difficoltà", userLevel);
console.log("range massimo", maxRangeLevel);
console.log("numeri delle bombe", bombs);
