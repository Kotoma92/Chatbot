function sendChat() {

    if(badWords.find(w => (chatInput.toLowerCase().includes(w)))) {
        console.log('Du skrev noe naughty')
        chat += '<br><del>' + chatInput + '</del>' +
                '<br><p>Your comment was deleted</p>';
        if(goodWordsCounter > 0) goodWordsCounter -= 1;
        badWordsCounter += 1;
        goodWordsBoolean = false;
        if(badWordsCounter == 3) {
            chat += 'You are now banned';
            badWordsButton = true;
        }
        updateView();
        
    } 
    if(goodWords.find(w => (chatInput.toLowerCase().includes(w)))) {
        console.log('Good Word')
        chat += '<br>' + chatInput; 
        if(badWordsCounter > 0) badWordsCounter -= 1;
        goodWordsCounter += 1;
        if(goodWordsCounter == 3) {
            chat += '<br>You are now a good boi!';
            goodWordsBoolean = true;
        }
        updateView();
    } else {
        console.log('Du kom igjennom chatbotten')
        chat += '<br>' + chatInput;
        updateView();
    }
}

function showWords() {
    badWordsBoolean = !badWordsBoolean;
    updateView();
}