<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chat Bot</title>
  <link rel="stylesheet" href="style.css">
  <style>
    /* Tambahan minimal agar terlihat rapi jika style.css belum lengkap */
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background: #f0f0f0;
    }
    #chat-box {
      background: #fff;
      border: 1px solid #ccc;
      padding: 10px;
      height: 300px;
      overflow-y: auto;
      margin-bottom: 10px;
    }
    .message.user {
      text-align: right;
      color: blue;
    }
    .message.bot {
      text-align: left;
      color: green;
    }
    #user-input {
      width: 80%;
      padding: 10px;
    }
    #send-btn {
      padding: 10px;
    }
  </style>
</head>
<body>

  <div id="chat-box"></div>

  <input type="text" id="user-input" placeholder="Tulis pesan...">
  <button id="send-btn">Kirim</button>

  <script src="script.js"></script>
</body>
</html>
