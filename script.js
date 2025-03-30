let buttons = [...document.querySelectorAll(".el_field")];
let step = true;
let reset = document.getElementsByClassName("res")[0];
let but_val = [];
let p = document.getElementById("p");

function addSound() {
  const arr = [
    "sounds/sound1.mp3",
    "sounds/sound2.mp3",
    "sounds/sound3.mp3",
    "sounds/sound4.mp3",
  ];
  const sound = new Audio();
  sound.src = arr[Math.floor(Math.random() * (3 + 1))];
  sound.volume = 0.2;
  sound.autoplay = true;
}
function cleaner() {
  const audio = new Audio();
  audio.src = "sounds/clean.mp3";
  audio.volume = 0.6;
  audio.autoplay = true;
}

const win_pos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

reset.addEventListener("click", function () {
  setTimeout(() => {
    buttons.forEach((el) => {
      step = true;
      el.innerHTML = "";
      el.disabled = false;
      p.innerHTML = "";
    });
  }, 300);
});

buttons.forEach((el) => {
  el.addEventListener("click", function () {
    setTimeout(() => {
      if (el.innerHTML === "") {
        if (step) {
          el.innerHTML = "X";
        } else {
          el.innerHTML = "O";
        }

        step = !step;
      }
      but_val = [];
      buttons.forEach((val) => {
        but_val.push(val.innerHTML);
      });
      for (let i = 0; i < win_pos.length; i++) {
        if (
          but_val.at(win_pos[i][0]) === "X" &&
          but_val.at(win_pos[i][1]) === "X" &&
          but_val.at(win_pos[i][2]) === "X"
        ) {
          p.innerHTML = "Winner is X!";
          buttons.forEach((val) => {
            val.disabled = true;
          });
        } else if (
          but_val.at(win_pos[i][0]) === "O" &&
          but_val.at(win_pos[i][1]) === "O" &&
          but_val.at(win_pos[i][2]) === "O"
        ) {
          p.innerHTML = "Winner is O!";
          buttons.forEach((val) => {
            val.disabled = true;
          });
        } else if (but_val.every((el) => el !== "")) {
          p.innerHTML = "Draw!";
          buttons.forEach((val) => {
            val.disabled = true;
          });
        }
      }
    }, 300);
  });
});
