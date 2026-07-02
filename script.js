/*
==================================
YURI'S LIBRARY
Main Script
Version 1.0
==================================
*/

const dialogueElement = document.getElementById("dialogue");
const affectionElement = document.getElementById("affection");
const visitsElement = document.getElementById("visits");

const talkButton = document.getElementById("talkButton");


// --------------------
// Default Save
// --------------------

let saveData = {

    affection: 0,

    visits: 1,

    seenDialogue: []

};


// --------------------
// Load Save
// --------------------

function loadGame(){

    const data = localStorage.getItem("yuriLibrarySave");

    if(data){

        saveData = JSON.parse(data);

    }

}


// --------------------
// Save Game
// --------------------

function saveGame(){

    localStorage.setItem(

        "yuriLibrarySave",

        JSON.stringify(saveData)

    );

}


// --------------------
// Update UI
// --------------------

function updateUI(){

    affectionElement.textContent = saveData.affection;

    visitsElement.textContent = saveData.visits;

}


// --------------------
// First Visit
// --------------------

function initializeGame(){

    loadGame();

    saveData.visits++;

    updateUI();

    saveGame();

}


// --------------------
// Talk
// --------------------

function talk(){

    const dialogue = getDialogue();

    dialogueElement.classList.remove("fade");

    void dialogueElement.offsetWidth;

    dialogueElement.classList.add("fade");

    dialogueElement.textContent = dialogue.text;

    if(dialogue.affection > 0){

        addAffection(dialogue.affection);

    }

    saveGame();

}


// --------------------
// Buttons
// --------------------

talkButton.addEventListener(

    "click",

    talk

);


// --------------------
// Start
// --------------------

initializeGame();
