const colors = [
  "green",
  "blue",
  "orange",
  "green",
  "pink",
  "yellow",
  "red",
  "rgba(133,122,200)",
  "#f15025",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  //Get random number between 0 - colors array length 

  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.innerHTML = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
