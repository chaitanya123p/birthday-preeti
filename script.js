body {
  margin: 0;
  font-family: Arial, sans-serif;
  text-align: center;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  min-height: 100vh;
}

.title {
  margin-top: 120px;
  font-size: 38px;
  color: #800040;
}

.subtitle {
  color: #5a0033;
}

.buttons button {
  margin: 10px;
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  background: #ff4f8b;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.buttons button:hover {
  background: #ff1e6a;
}

/* Popups */
.popup {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
}

.popup.show {
  display: block;
}

.popup-box {
  background: white;
  margin: 100px auto;
  padding: 25px;
  width: 85%;
  max-width: 420px;
  border-radius: 20px;
}

.popup-box.long {
  text-align: left;
  max-height: 70vh;
  overflow-y: auto;
}

.bottom {
  margin-top: 80px;
  padding: 40px;
  background: rgba(255,255,255,0.5);
}
