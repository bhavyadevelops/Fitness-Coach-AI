const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const chatArea = document.getElementById("chatArea");

async function sendMessage() {

    const message = messageInput.value.trim();

    if (!message) return;

    const userMessage = document.createElement("div");
    userMessage.className = "msg";

    userMessage.innerHTML = `
        <div class="bubble">${message}</div>
    `;

    chatArea.insertBefore(
        userMessage,
        document.querySelector(".composer")
    );

    messageInput.value = "";

    try {

        const response = await fetch(
            "http://127.0.0.1:5000/chat",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: message
                })
            }
        );

        const data = await response.json();

        const botMessage = document.createElement("div");
        botMessage.className = "msg";

        botMessage.innerHTML = `
            <div class="bot-avatar">🤖</div>
            <div class="bubble">${data.reply}</div>
        `;

        chatArea.insertBefore(
            botMessage,
            document.querySelector(".composer")
        );

    } catch (error) {

        console.error(error);

        alert("Titan connection failed.");

    }

}

sendBtn.addEventListener("click", sendMessage);

messageInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});