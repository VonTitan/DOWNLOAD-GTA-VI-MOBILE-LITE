document.addEventListener("DOMContentLoaded", function () {
  const chatBox = document.getElementById("chat-box");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

  sendBtn.addEventListener("click", handleSend);
  userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") handleSend();
  });

  function handleSend() {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage(message, "user");
    userInput.value = "";

    setTimeout(() => {
      const reply = generateReply(message);
      if (reply) addMessage(reply, "bot");
    }, 500);
  }

  function addMessage(text, sender) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `message ${sender}`;
    msgDiv.innerText = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  const rules = [
    {
      pattern: /hd-version/i,
      response: "version-- 1.8.6\nstatus-- no update\nsignature-- haiqmbeofnw8h2825i3b191n39w"
    },
    {
      pattern: /plugin module/i,
      response: "Plugin module aktif. Ketik 'plugin menu' untuk melihat daftar plugin."
    },
    {
      pattern: /instal modmenu/i,
      response: "Success! Silakan run mod-nya dengan mengetik: run modmenu"
    },
    {
      pattern: /instal heck tool game/i,
      response: "Success! Silakan run plugin-nya dengan mengetik: run heck tool game"
    },
    {
      pattern: /instal modhorse/i,
      response: "Success! Silakan run plugin-nya dengan mengetik: run modhorse"
    },
    {
      pattern: /run modhorse/i,
      response: "🐎🐴 Modhorse dijalankan!"
    },
    {
      pattern: /run modmenu/i,
      response: "Menjalankan: S-Sistem, HD-Version, Plugin Menu"
    },
    {
      pattern: /run heck tool game/i,
      response: "Unfortunately there is no library.\nSilakan download plugin yang dibutuhkan."
    },
    {
      pattern: /help|Help|HELP/i,
      response: "hd-version=plugin menu=s-sistem"
    }
  ];

  function generateReply(input) {
    input = input.toLowerCase();

    if (input.includes("s-sistem")) {
      window.location.href = "sistem.html";
      return "";
    }

    if (input.includes("plugin menu")) {
      return showPluginMenu();
    }

    for (let rule of rules) {
      if (rule.pattern.test(input)) {
        return rule.response;
      }
    }

    return "Maaf, saya belum mengerti. Coba tanya yang lain ya.";
  }

  function showPluginMenu() {
    return `Plugin Menu:
1. Instal modmenu → Ketik: instal modmenu
2. Instal heck tool game → Ketik: instal heck tool game
3. Instal modhorse → Ketik: instal modhorse
4. Jalankan modmenu → Ketik: run modmenu
5. Jalankan modhorse → Ketik: run modhorse
6. Jalankan heck tool game → Ketik: run heck tool game`;
  }
});
