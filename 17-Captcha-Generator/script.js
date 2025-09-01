let code = "";

function createCaptcha() {
  const holder = document.getElementById("captcha");
  holder.innerHTML = "";

  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  const len = 6;
  const captcha = [];

  while (captcha.length < len) {
    const idx = Math.floor(Math.random() * chars.length);
    const ch = chars[idx];
    if (!captcha.includes(ch)) captcha.push(ch);
  }

  const canv = document.createElement("canvas");
  canv.width = 130;
  canv.height = 50;

  const ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.textBaseline = "middle";
  ctx.clearRect(0, 0, canv.width, canv.height);
  ctx.strokeText(captcha.join(""), 8, canv.height / 2 + 2);

  code = captcha.join("");
  holder.appendChild(canv);
}

function validateCaptcha() {
  const input = document.getElementById("cpatchaTextBox").value.trim();
  if (input === code) {
    alert("Valid Captcha");
  } else {
    alert("Invalid Captcha. Try again");
    createCaptcha();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createCaptcha();
  document.getElementById("regen").addEventListener("click", createCaptcha);
  document.getElementById("submit-btn").addEventListener("click", validateCaptcha);
});
