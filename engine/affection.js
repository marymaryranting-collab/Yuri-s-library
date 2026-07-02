/*
=========================================
YURI'S LIBRARY
Affection System
=========================================
*/

function addAffection(amount){

    saveData.affection += amount;

    if(saveData.affection < 0){

        saveData.affection = 0;

    }

    updateUI();

    saveGame();

}
