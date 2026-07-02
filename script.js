/*
=========================================
YURI'S LIBRARY
Main Controller
Version 1.0
=========================================
*/

// ----------------------
// HTML Elements
// ----------------------

const dialogueElement = document.getElementById("dialogue");
const affectionElement = document.getElementById("affection");
const visitsElement = document.getElementById("visits");

const talkButton = document.getElementById("talkButton");


// ----------------------
// Global Save
// ----------------------

let saveData;


// ----------------------
// UI
// ----------------------

function updateUI() {

    affectionElement.textContent = saveData.affection;

    visitsElement.textContent = saveData.visits;

}


// ----------------------
// Talk
// ----------------------

function talk() {

    const dialogue = getDialogue();

    dialogueElement.classList.remove("fade");

    void dialogueElement.offsetWidth;

    dialogueElement.classList.add("fade");

    dialogueElement.textContent = dialogue.text;

    addAffection(dialogue.affection);

}


// ----------------------
// Game Start
// ----------------------

function initializeGame() {

    loadGame();

    saveData.visits++;

    updateUI();

    saveGame();

}


// ----------------------
// Buttons
// ----------------------

talkButton.addEventListener("click", talk);


// ----------------------
// Launch
// ----------------------

initializeGame();
