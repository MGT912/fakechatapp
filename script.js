const messages = [];

function addMessage() {
  const content = document.getElementById("messageInput").value.trim();
  const position = document.getElementById("position").value;

  if (!content) return;

  messages.push({ content, position });
  renderChat();
  document.getElementById("messageInput").value = "";
}

function renderChat() {
  const preview = document.getElementById("preview");
  preview.innerHTML = "";

  messages.forEach(msg => {
    const bubble = document.createElement("div");
    bubble.classList.add("chat-bubble", msg.position);
    bubble.innerText = msg.content;
    preview.appendChild(bubble);
  });

  preview.scrollTop = preview.scrollHeight;
}
