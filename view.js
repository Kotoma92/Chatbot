updateView();
function updateView() {

    document.getElementById('app').innerHTML =/*html*/ `
    <h2>Twitch Chat</h2>
    <div class="chatBox">${chat}</div><br>
    <input placeholder="Chat here" class="chatInput" oninput="chatInput = this.value" />
    <button ${button ? 'disabled' : ''} onclick="sendChat()" class="chatButton">Send</button>
    
    <button onclick="showWords()">Show bad words</button>

    <div ${showWordsBoolean ? '' : 'hidden'}>${badWords}</div>
    `;
}