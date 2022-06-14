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
// dunque il gioco finisce con un messaggio di game over + numero di tentativi corretti.
// Altrimenti il gioco va avanti fino a quando si raggiunge il numero massimo di tentativi (maxRange-bombs)
// In questo caso il gioco finisce con un messaggio di vittoria


// Ask the user the difficulty level of the game
const userLevel = parseInt(prompt("Scegli il livello di difficoltà: 1, 2 o 3"));

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

// Bomb-numbers 
const bombNumbers = 16;
const bombs = generateBombNumbers(bombNumbers, minRangeLevel, maxRangeLevel);

// Max attempts 
const maxAttempts = maxRangeLevel - bombNumbers;

// Safe numbers
const safeNumbersArray = [];


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
            bombsArray.push(randomBomb);
        }
    }

    return bombsArray;
}

// Logic engine of the game
let gameGoesOn = true;
while (gameGoesOn) {

    // Ask the user a number till the end games 
    const userNumber = parseInt(prompt("Digita un numero"));
    
    // If the userNumber is a bombNumber - game over
    if (bombs.includes(userNumber)) {
        alert(`Hai perso! Tentativi corretti: ${safeNumbersArray.length}`);
        gameGoesOn = false;
    } else {
        // Push the userNumber in the safeNumbersArray - if not already present
        if (!safeNumbersArray.includes(userNumber)) {
            safeNumbersArray.push(userNumber);
        }

        // If the user reaches the number of maxAttempts - win alert
        if (safeNumbersArray.length === maxAttempts) {
            alert("Hai vinto! Hai raggiunto il numero massimo di tentativi corretti");
            gameGoesOn = false;
        }
    }
}
