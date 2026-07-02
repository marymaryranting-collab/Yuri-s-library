/*
=========================================
YURI'S LIBRARY
Dialogue Engine
Version 1.0
=========================================
*/

function getDialogue() {

    // All dialogue the player is allowed to see
    const availableDialogue = dialogues.filter(dialogue => {

        return dialogue.affectionRequired <= saveData.affection;

    });

    // Prevent repeating the same dialogue forever
    let unseenDialogue = availableDialogue.filter(dialogue => {

        return !saveData.seenDialogue.includes(dialogue.id);

    });

    // If every dialogue has been seen,
    // allow repeats again.
    if (unseenDialogue.length === 0) {

        saveData.seenDialogue = [];

        unseenDialogue = availableDialogue;

    }

    // Pick one randomly
    const randomDialogue = unseenDialogue[
        Math.floor(Math.random() * unseenDialogue.length)
    ];

    // Remember it
    saveData.seenDialogue.push(randomDialogue.id);

    return {

        id: randomDialogue.id,

        text: randomDialogue.text,

        affection: randomDialogue.affectionReward

    };

}
