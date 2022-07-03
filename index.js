let characterSet = [];
let inputContainer = document.querySelector(".input-container");
let passwordElements = document.querySelectorAll(".password");
let inputForm = document.getElementById("input");
let passwordLength = 0;

for (i=33 ; i < 126; i++) {
    characterSet.push(String.fromCharCode(i));
}

function generatePassword() {
    let password = "";
    passwordLength = inputForm.value;
    for(let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * 94);
        let randomCharacter = characterSet[randomNumber];
        password += randomCharacter;
    }

    return password;
}

function displayPasswords() {
    for (let i = 0; i < passwordElements.length; i++) {
        passwordElements[i].textContent = generatePassword();
    }
}

function showPasswordLength() {
    if (document.querySelector(".input-length"))
    {
        (document.querySelector(".input-length")).remove();
    }
    let div = document.createElement("div");
    div.setAttribute("class", "input-length")
    inputContainer.append(div);
    div.append(inputForm.value);
}

function copyToCipboard(content){
    if (content !== "") {
        navigator.clipboard.writeText(content);
        showMessage();
    }
}