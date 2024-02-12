const copybtn = document.querySelector("#copy");
const copied = document.querySelector(".copied");
const inputRange = document.querySelector("#inputRange");
const progress = document.querySelector(".progress");
const inpLength = document.querySelector(".inpLength");
const randomtxt = document.querySelector(".randomtxt");
const upperCase = document.getElementById("UpperCase");
const lowerCase = document.getElementById("Lowercase");
const symbols = document.getElementById("Symbols");
const numbers = document.getElementById("Numbers");

const passLevel = document.querySelector("#passLevel");
const progr1 = document.querySelector("#progr1");
const progr2 = document.querySelector("#progr2");
const progr3 = document.querySelector("#progr3");
const progr4 = document.querySelector("#progr4");

console.log(upperCase);
console.log(lowerCase);
console.log(symbols);
console.log(numbers);

function copy() {
  let text = randomtxt.textContent;
  let textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

copybtn.addEventListener("click", function (e) {
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

///
const Generate = document.querySelector("button");

Generate.addEventListener("click", GeneratePassword);

function GeneratePassword() {
  let count = 0;
  let string = "";

  if (upperCase.checked) {
    string += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    count++;
    console.log(count);
  }
  if (lowerCase.checked) {
    string += "abcdefghijklmnopqrstuvwxyz";
    count++;
    console.log(count);
  }
  if (numbers.checked) {
    string += "0123456789";
    count++;
    console.log(count);
  }
  if (symbols.checked) {
    string += "`~!@#$%^&*()_+-={}[]|;:'<>,./?";
    count++;
    console.log(count);
  }
  if (count === 1) {
    passLevel.textContent = "TOO WEAK!";
    progr1.style.background = " #f64a4a";
    progr1.style.border = "none";
    progr2.style.border = " solid 2px #e6e5ea";
    progr2.style.background = "none";
  }
  if (count === 2) {
    passLevel.textContent = "WEAK!";
    progr1.style.background = " #fb7c58";
    progr2.style.background = "#fb7c58";
    progr2.style.border = "none";
    progr1.style.border = "none";
    progr3.style.border = " solid 2px #e6e5ea";
    progr3.style.background = "none";
    progr4.style.border = " solid 2px #e6e5ea";
    progr4.style.background = "none";
  }
  if (count === 3) {
    passLevel.textContent = "MEDIUM";
    progr1.style.background = " #f8cd65";
    progr2.style.background = "#f8cd65";
    progr3.style.background = "#f8cd65";
    progr3.style.border = "none";
    progr2.style.border = "none";
    progr1.style.border = "none";
    progr3.style.border = "none";
    progr4.style.border = " solid 2px #e6e5ea";
    progr4.style.background = "none";
  }
  if (count === 4) {
    passLevel.textContent = "STRONG";
    progr1.style.background = " #a4ffaf";
    progr2.style.background = "#a4ffaf";
    progr3.style.background = "#a4ffaf";
    progr4.style.background = "#a4ffaf";
    progr3.style.border = "none";
    progr2.style.border = "none";
    progr1.style.border = "none";
    progr4.style.border = "none";
  }
  if (string !== "" && inputRange.value !== 0) {
    let passwordLength;
    let password = "";
    passwordLength = inputRange.value;
    for (let i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * string.length);
      password += string[randomNumber];
      console.log(password);
      randomtxt.textContent = password;
      copied.style.display = "none";
    }
  }
}
