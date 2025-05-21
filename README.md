# fiveloungeai3
<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <title>فایوبات - دستیار شخصی شما در فایو لانژ</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="chat-container">
        <h2>🍽️ فایوبات: خوش اومدی به فایو لانژ!</h2>
        <div id="chat-box">
            <div class="message bot">سلام! من فایوباتم 🤖 دستیار هوشمند فایو لانژ! برای اینکه تجربه‌ای خاص برات بسازم، لطفاً اسمتو بهم بگو 🙏</div>
        </div>
        <input type="text" id="user-input" placeholder="بنویس..." />
        <button onclick="sendMessage()">ارسال</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
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
body {
    font-family: sans-serif;
    background-color: #1e1e1e;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
#chat-container {
    width: 90%;
    max-width: 500px;
    background-color: #2c2c2c;
    border-radius: 15px;
    padding: 20px;
}
#chat-box {
    height: 300px;
    overflow-y: auto;
    margin-bottom: 10px;
}
.message {
    margin: 10px 0;
}
.bot {
    color: #90caf9;
}
.user {
    color: #f48fb1;
    text-align: right;
}
