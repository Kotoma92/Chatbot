updateView();
function updateView() {

    document.getElementById('app').innerHTML =/*html*/ `
    <h2>Twitch Chat</h2>
    <div>Good boi counter = ${goodWordsCounter}</div><div>Bad boi counter = ${badWordsCounter}</div>
    <div class="chatBox">${chat}</div><br>
    <input placeholder="Chat here" class="chatInput" oninput="chatInput = this.value" />
    <button ${badWordsButton ? 'disabled' : ''} onclick="sendChat()" class="chatButton">Send</button>
    
    <button onclick="showBadWords()">Show bad words</button>
    <button onclick="showGoodWords()">Show good words</button>

    <div ${badWordsBoolean ? '' : 'hidden'}>${badWords}</div>
    <div ${goodWordsBoolean ? '' : 'hidden'}>${goodWords}</div>

    <button ${goodBoiBoolean ? '' : 'hidden'} onclick="goodBoiView()">Du har vært en good boi</button>
    `;
}

function goodBoiView() {
    document.getElementById('app').innerHTML =/*html*/ `
    
    <img src="./a31c703e-3403-4a14-acdc-79ce4b7db884.jpg">

    <button onclick="updateView()">Gå tilbake</button>
    
    `;
}