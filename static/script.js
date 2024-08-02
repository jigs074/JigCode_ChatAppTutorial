document.addEventListener('DOMContentLoaded', () => {
    const socket = io();

    const input = document.getElementById('message');
    const messages = document.getElementById('messages');
    const sendButton = document.getElementById('sendButton');
    const form = document.getElementById('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (input.value) {
            socket.send(input.value);
            input.value = '';
        }
    });

    socket.on('message', (msg) => {
        const item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
    });
});
