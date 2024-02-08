const copybtn = document.querySelector("#copy");
const copied = document.querySelector(".copied");

const inputRange = document.querySelector("#inputRange");
const progress = document.querySelector(".progress");
const inpLength = document.querySelector(".inpLength");
const randomtxt = document.querySelector(".randomtxt");

function copy() {
  let text = randomtxt.textContent;
  let textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

copybtn.addEventListener("click", function () {
  copy();
  copied.style.display = "block";
});

inpLength.textContent = inputRange.value;
inputRange.addEventListener("input", () => {
  inpLength.textContent = inputRange.value;
  const value = parseInt(inputRange.value);
  const width = value * 5 + "%";
  progress.style.width = width;
});

let string =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

const Generate = document.querySelector("button");

Generate.addEventListener("click", GeneratePassword);

function GeneratePassword() {
  let passwordLength;
  let password = "";
  passwordLength = inputRange.value;
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * string.length);
    password += string.substring(randomNumber, randomNumber + 1);
    console.log(password);
    randomtxt.textContent = password;
  }
}

const inputs = document.querySelectorAll('input[type="checkbox"]');

const checkbox = inputs.forEach((input) => {
  console.log(input.value);
});
