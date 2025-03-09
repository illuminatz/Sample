document.addEventListener('DOMContentLoaded', function() {
    console.log('Sample Website Loaded');
    let chatDisplayed = false; // Add a flag to track if the chat message has been displayed
    document.getElementById('chat-icon').addEventListener('click', function() {
        document.getElementById('chat-box').classList.toggle('hidden');
        if (!document.getElementById('chat-box').classList.contains('hidden') && !chatDisplayed) {
            setTimeout(function() {
                displayArtificialUserMessage('Hello! How can I assist you today?');
                addMessengerLinkButton(); // Add the Messenger link button
                chatDisplayed = true; // Set the flag to true after displaying the message
            }, 1000);
        }
    });

    document.getElementById('close-chat').addEventListener('click', function() {
        document.getElementById('chat-box').classList.add('hidden');
    });
});

function displayArtificialUserMessage(message) {
    const chatBody = document.querySelector('.chat-body');
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);
}

function addMessengerLinkButton() {
    const chatBody = document.querySelector('.chat-body');
    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Chat on Messenger';
    buttonElement.onclick = function() {
        window.open('https://www.messenger.com/t/lstrjhndlpn', '_blank');
    };
    chatBody.appendChild(buttonElement);
}
