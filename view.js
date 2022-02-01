updateView();
function updateView() {

    document.getElementById('app').innerHTML =/*html*/ `
    <div class"chat">
        <div class="boiText">Good boi counter = ${goodWordsCounter}</div>
        <div class="boiText">Bad boi counter = ${badWordsCounter}</div>

        <div class="chatBox">${chat}</div><br>

        <input id="input" ${badWordsButton ? 'disabled' : ''} placeholder="Chat here" class="chatInput" oninput="chatInput = this.value"/>
        <br>
        <button ${badWordsButton ? 'disabled' : ''} onclick="sendChat()" class="chatButton">Send</button>
        <button class="chatButton" onclick="clearChat()">Clear chat</button>
        <br>
        <button class="chatButton" onclick="showGoodWords()">Post good words</button>
        <br>
        <button class="chatButton" onclick="showBadWords()">Post bad words</button>
        <button class="chatButton" ${goodBoiBoolean ? '' : 'hidden'} onclick="goodBoiView()">Du har vært en good boi</button>
    </div>

    <div class="specs">
        Specs: HP Pavilion T000<br>
        CPU: AMD Athlon 64 3200<br>
        RAM: 512MB DDR<br>
        HDD: 160GB<br>
        ROM: DVD Writer<br>
        GPU: Nvidia FX5500 256MB Graphics (VGA & DVI port)<br>
        OS: Windows XP<br>
    </div>

    `;
}

function goodBoiView() {
    document.getElementById('app').innerHTML =/*html*/ `
    
    <h1>Du har vært en good boi :3</h1>
    <h3>Ta noen cookies og melk!</h3>
    <img src="./a31c703e-3403-4a14-acdc-79ce4b7db884.jpg">

    <button onclick="updateView()">Gå tilbake</button>
    
    `;
}