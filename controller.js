window.addEventListener("keypress", sendKey);
function sendKey(e){
    if(e.code === 'Enter'|| e.code === 'NumpadEnter') {
        sendChat();
    }
}

function sendChat(){
  if(isBadWord()){
    chat += isBadWordWithReturnValue();
    incrementBadWord()
  }else if(isGoodWord()){
    chat += isGoodWordWithReturnValue();
    incrementGoodWord()
  }else{
    console.log('Du kom igjennom chatbotten')
    chat += `<br>${chatInput}`;
}
    updateView();
}

function isBadWord(){
    if (badWords.find(w => (chatInput.toLowerCase().includes(w)))){
        console.log('Du skrev noe naughty');
        return true;
    }
   return false;
}

function isBadWordWithReturnValue(){
    return `<br>Your comment was deleted<del><br>${chatInput}</del>`;
}

function incrementBadWord(){
    badWordsCounter ++;
    goodWordsBoolean = false;
    if(goodWordsCounter > 0) goodWordsCounter --;
    if(badWordsCounter == 3) {
        chat += '<br>You are now banned';
        badWordsButton = true;
    }
    return;
}

function isGoodWord(){
    if (goodWords.find(w => (chatInput.toLowerCase().includes(w)))){
        console.log('Du skrev noe bra');
        return true;
    }
   return false;
}

function isGoodWordWithReturnValue(){
        return `<br>${chatInput}`;
}

function incrementGoodWord(){
    goodWordsCounter ++;
    if(goodWordsCounter == 3) {
        chat += '<br>You are now a good boi!';
        goodBoiBoolean = true;
    }
}   

function clearChat(){
    chat = '';
    badWordsCounter = 0;
    goodWordsCounter = 0;
    badWordsButton = false;
    updateView();
}

function showBadWords(){
    badWordsBoolean = !badWordsBoolean;
    goodWordsBoolean = false;
    updateView();
}

function showGoodWords(){
    goodWordsBoolean = !goodWordsBoolean;
    badWordsBoolean = false;
    updateView();
}