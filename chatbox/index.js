const chatboxDiv = document.getElementById("chatbox");
const messagesEl = document.getElementById("messages");
const inputEl = document.getElementById("input");
const sendButtonEl = document.getElementById("send-button");
const deleteButton = document.getElementById("delete");

if (deleteButton) {
    deleteButton.addEventListener("click", () => {
        const boxMessage = document.getElementById("messages");
        boxMessage.innerHTML = "";
        localStorage.setItem('liorion_ai', "[]");
        alert("Đã xóa hết dữ liệu!");
    });
}

var data_mess = [];
if (localStorage.getItem('liorion_ai')) {
    data_mess = JSON.parse(localStorage.getItem('liorion_ai'));
    data_mess.map((mess) => {
        addMessage(mess.parts[0].text, mess.role);
    });
    messagesEl.scrollTop = messagesEl.scrollHeight;
} else {
    localStorage.setItem("liorion_ai", "[]");
}

sendButtonEl.addEventListener("click", () => {
    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

    const content = inputEl.value;
    if (!content) return;

    data_mess.push({
        role: "user",
        parts: [{ text: content }]
    });

    const data = {
        contents: data_mess
    };

    const headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": "AIzaSyDqNpNtkZJOTR4bfY_byhc4dKTErUTT_Jc",
        "Connection": "keep-alive"
    };

    fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => {
                    throw new Error(`Error: ${response.status}`);
                });
            }
            return response.json();
        })
        .then(data => {
            let message = "";
            message = data.candidates[0].content.parts[0].text;
            data_mess.push({
                role: "model",
                parts: [{ text: message }]
            });
            localStorage.setItem('liorion_ai', JSON.stringify(data_mess));
            addMessage(message, "model");
        })
        .catch(error => {
            data_mess.pop();
            addMessage("Lỗi", "model");
            console.error(error);
        });
    addMessage(content, "user");
    messagesEl.scrollTop = messagesEl.scrollHeight;
    inputEl.value = "";
});

function addMessage(message, role) {
    const messageEl = document.createElement("div");
    messageEl.classList.add("message", role);

    const messageSpan = document.createElement("span");
    messageSpan.textContent = message;

    messageEl.appendChild(messageSpan);
    messagesEl.appendChild(messageEl);
    messagesEl.scrollTop = messagesEl.scrollHeight;
}

const chatbox = document.getElementById("chatbox");