function sendChat() {

    if(badWords.find(w => (chatInput.toLowerCase().includes(w)))) {
        console.log('Du skrev noe naughty')
        chat += '<br><del>' + chatInput + '</del>' +
                '<br><p>Your comment was deleted</p>';
        badWordCounter += 1;
        if(badWordCounter == 3) {
            chat += 'You are now banned';
            button = true;
        }
        updateView();
        
    } else {
        console.log('Du kom igjennom chatbotten')
        chat += '<br>' + chatInput;
        updateView();
    }

}

function showWords() {
    showWordsBoolean = !showWordsBoolean;
    updateView();
}