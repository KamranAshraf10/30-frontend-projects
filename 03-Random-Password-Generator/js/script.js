document.addEventListener("DOMContentLoaded", () => {
  // Selecting DOM elements
  const lengthSlider = document.getElementById("lengthSlider");
  const lengthValueDisplay = document.getElementById("lengthValue");
  const includeUppercase = document.getElementById("uppercase");
  const includeLowercase = document.getElementById("lowercase");
  const includeNumbers = document.getElementById("numbers");
  const includeSymbols = document.getElementById("symbols");
  const generateBtn = document.getElementById("generatePassword");
  const passwordDisplay = document.getElementById("passwordDisplay");

  const passwordText = document.getElementById("passwordText");
  const copyBtn = document.getElementById("copyPassword");

  // Character sets
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  //   update length on change
  lengthSlider.addEventListener("input", function () {
    lengthValueDisplay.textContent = this.value;
  });

  //   Genrate Pass Function
  function generatePassword() {
    const length = lengthSlider.value;
    let charset = "";
    let password = "";

    if (includeUppercase.checked) charset += uppercaseChars;
    if (includeLowercase.checked) charset += lowercaseChars;
    if (includeNumbers.checked) charset += numberChars;
    if (includeSymbols.checked) charset += symbolChars;

    if (charset === "") {
      passwordText.textContent = "Please select one character type";
      passwordDisplay.style.color = "#EF4444";

      return;
    }

    // Generate random password
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    // Display the password
    passwordText.textContent = password;
    passwordDisplay.style.color = "";
  }

  //   Event listner for Generate button
  generateBtn.addEventListener("click", generatePassword);

  //   Event listner for  Copy button
  copyBtn.addEventListener("click", () => {
    const password = passwordText.textContent.trim();

    if (
      !password ||
      password === "Please select one character type" ||
      password === "Your password will appear here"
    ) {
      alert("No valid password to copy!");
      return;
    }

    navigator.clipboard.writeText(password).then(() => {
      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = "Copy";
      }, 1500);
    });
  });
});
