let buttons = [...document.querySelectorAll(".el_field")];
let step = true;
let reset = document.getElementsByClassName("res")[0];
let but_val = [];
let p = document.getElementById("p");
// buttons[0].disabled = true;

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
  buttons.forEach((el) => {
    step = true;
    el.innerHTML = "";
    el.disabled = false;
    p.innerHTML = "";
  });
});

buttons.forEach((el) => {
  el.addEventListener("click", function () {
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
        p.innerHTML = "Победили крестики!";
        buttons.forEach((val) => {
          val.disabled = true;
        });
      } else if (
        but_val.at(win_pos[i][0]) === "O" &&
        but_val.at(win_pos[i][1]) === "O" &&
        but_val.at(win_pos[i][2]) === "O"
      ) {
        p.innerHTML = "Победили нолики!";
        buttons.forEach((val) => {
          val.disabled = true;
        });
      } else if (but_val.every((el) => el !== "")) {
        p.innerHTML = "Ничья!";
        buttons.forEach((val) => {
          val.disabled = true;
        });
      }
      // buttons.forEach((val) => {
      //   val.disabled = true;
      // });
    }
  });
});
