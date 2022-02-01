//En event listener som ser etter keypresses, sender keypress gjennom parameter "e".
//Så sjekker den en if statement om det er enter tasten som er trykket.
window.addEventListener("keypress", sendKey);
function sendKey(e){
    if(!badWordsButton){
        if(e.code === 'Enter'|| e.code === 'NumpadEnter') {
            sendChat();
        }
    }
}

//Dette er hovedfunksjonen som binder alt sammen. Den sjekker om de andre funksjonene finner "BadWords eller GoodWords", så kjører den en funksjon med return verdi for å putte inn i chat boksen hvis de er enten Bad eller Good words. Hvis ikke, kjører input rett i chat boksen med en Break.
//Så oppdaterer den veiwet, og fokuserer på input slik at man kan fortsette å skrive.
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
    document.getElementById('input').focus();
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

//Denne passer på at man ikke har sagt for mye dumt. Hvis man sier for mye dumt, blir man bannlyst.
function incrementBadWord(){
    badWordsCounter ++;
    goodBoiBoolean = false;
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

//Denne gir deg en liten reward når man har vært snill :)
function incrementGoodWord(){
    goodWordsCounter ++;
    if(goodWordsCounter == 3) {
        chat += '<br>You are now a good boi!';
        goodBoiBoolean = true;
    }
}   

//Denne clearer resetter chat, setter verdier til false og 0
function clearChat(){
    chat = '';
    badWordsCounter = 0;
    goodWordsCounter = 0;
    badWordsButton = false;
    goodBoiBoolean = false;
    updateView();
}

//Disse to viser verdiene i Array'ene
function showGoodWords(){
    clearChat();
    chat += goodWords.join("<br>");
    updateView();
}

function showBadWords(){
    clearChat();
    chat += badWords.join("<br>");
    updateView();
}