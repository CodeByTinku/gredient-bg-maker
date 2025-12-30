let randomHex = function generateRandomHexCode() {
  const hexCharacters = "0123456789abcdef";
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hexCharacters[Math.floor(Math.random() * hexCharacters.length)];
  }
  return hexCode;
};

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let color1 = randomHex();
let color2 = randomHex();

btn1.innerText = color1;
btn2.innerText = color2;

btn1.addEventListener("click", () => {
  color1 = randomHex();
  btn1.innerText = color1;
  updateBackground();
});

btn2.addEventListener("click", () => {
  color2 = randomHex();
  btn2.innerText = color2;
  updateBackground();
});

function updateBackground() {
  if (color1 && color2) {
    document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
  }
}
