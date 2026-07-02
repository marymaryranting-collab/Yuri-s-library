/*
=========================================
YURI'S LIBRARY
Save System
Version 1.0
=========================================
*/

const SAVE_KEY = "yuris_library_save";

const DEFAULT_SAVE = {

    affection: 0,

    visits: 0,

    seenDialogue: [],

    settings: {

        music: true,

        animations: true

    }

};

function loadGame(){

    const data = localStorage.getItem(SAVE_KEY);

    if(data){

        try{

            saveData = {

                ...DEFAULT_SAVE,

                ...JSON.parse(data)

            };

        }

        catch{

            saveData = structuredClone(DEFAULT_SAVE);

        }

    }

    else{

        saveData = structuredClone(DEFAULT_SAVE);

    }

}

function saveGame(){

    localStorage.setItem(

        SAVE_KEY,

        JSON.stringify(saveData)

    );

}

function resetSave(){

    saveData = structuredClone(DEFAULT_SAVE);

    saveGame();

}
