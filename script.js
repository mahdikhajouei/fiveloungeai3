
let chatBox = document.getElementById('chat-box');
let input = document.getElementById('user-input');

function sendMessage() {
    const userText = input.value.trim();
    if (userText === '') return;
    appendMessage('user', userText);
    input.value = '';

    setTimeout(() => {
        if (userText.includes("سلام") || userText.includes("اس")) {
            appendMessage('bot', 'خوشحالم باهات آشنا شدم! 😊 شماره تماست رو هم لطفاً بهم بده.');
        } else if (userText.match(/^09\d{9}$/)) {
            appendMessage('bot', 'مرسی! حالا بگو امروز دنبال چه حسی هستی؟ یه تجربه آروم؟ یا یه شب پرهیجان؟');
        } else {
            appendMessage('bot', 'ممنونم 🌟 ادامه بدیم؟ دوست داری سبک غذایی مورد علاقتو انتخاب کنی؟ 🍕🥗🍗');
        }
    }, 1000);
}

function appendMessage(sender, text) {
    const message = document.createElement('div');
    message.className = 'message ' + sender;
    message.innerText = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}
