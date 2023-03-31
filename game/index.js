const getComputer = document.getElementById("getComputer");
const Options = document.querySelectorAll(".option");
const table = document.querySelector(".table");
const main_game_board = document.querySelector(".main_game_board");
const game_over = document.querySelector(".game_over");
const results = document.querySelector(".results");
const player_picked = document.querySelector(".player_choice");
const computer_picked = document.querySelector(".computer_choice");
const text_result = document.querySelector(".text_result");
const game_over_result_bg = document.querySelector(".game_over_result_bg");
const game_over_result_text = document.querySelector(".game_over_result_text");
const player_score = document.getElementById("your_score");
const computer_score = document.getElementById("computer_score");
const play_again_btn = document.querySelector(".play_again_btn");
const rules_btn = document.querySelector(".rules_btn");
const rules = document.querySelector(".rules");
const reset = document.querySelector(".reset");

const computer_picked_container = document.querySelector(
  ".computer_choice_container"
);
const player_picked_container = document.querySelector(
  ".player_choice_container"
);
const action_result = document.querySelector(".action");

let player_score_count = 0;
let computer_score_count = 0;

computerOptions = ["rock", "paper", "scissor", "spock", "gun"];

const youwin = () => {
  main_game_board.style.display = "none";
  game_over.style.display = "flex";
  game_over_result_bg.src = "./assets/gameoverwin.png";
  game_over_result_text.innerHTML = "You Win This Game";
};
const comwin = () => {
  main_game_board.style.display = "none";
  game_over.style.display = "flex";
  game_over_result_bg.src = "./assets/gameoverlose.png";
  game_over_result_text.innerHTML = "Computer Win This Game";
};

const addPlayerCount = () => {
  setTimeout(() => {
    player_score_count += 1;
    player_score.innerHTML = player_score_count;
    if (player_score_count == 6) {
      youwin();
    }
  }, 2000);
};
const addComputerCount = () => {
  setTimeout(() => {
    computer_score_count += 1;
    computer_score.innerHTML = computer_score_count;
    if (computer_score_count == 6) {
      comwin();
    }
  }, 2000);
};
const stayCount = () => {
  setTimeout(() => {
    player_score_count = player_score_count;
    computer_score_count = computer_score_count;
    player_score.innerHTML = player_score_count;
    computer_score.innerHTML = computer_score_count;
  }, 2000);
};

// start the game
const PlayStart = () => {
  Options.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      table.classList.toggle("table_off");

      const computer = Math.floor(Math.random() * 5);
      const computerChoice = computerOptions[computer];
      const playerChoice = item.attributes.name.value;

      //get winner
      const winner = () => {
        const assetDir = "./assets/";
        player_picked.src = `${assetDir}${playerChoice}.svg`;
        computer_picked.src = `${assetDir}${computerChoice}.svg`;

        if (playerChoice == "gun") {
          if (["scissor", "spock"].includes(computerChoice)) {
            addPlayerCount();
            return "You win";
          } else if (computerChoice == "gun") {
            //stayCount();
            return "Tie ";
          }
        }
        if (playerChoice == "rock") {
          if (["scissor", "spock", "gun"].includes(computerChoice)) {
            addPlayerCount();
            return "You win";
          } else if (computerChoice == "rock") {
            //stayCount();
            return "Tie ";
          }
        }

        if (playerChoice == "scissor") {
          if (["paper"].includes(computerChoice)) {
            addPlayerCount();
            return "You win";
          } else if (computerChoice == "scissor") {
            //stayCount();
            return "Tie ";
          }
        }

        if (playerChoice == "spock") {
          if (["paper", "scissor"].includes(computerChoice)) {
            addPlayerCount();
            return "You win";
          } else if (computerChoice == "spock") {
            //stayCount();
            return "Tie ";
          }
        }
        if (playerChoice == "paper") {
          if (["rock", "gun"].includes(computerChoice)) {
            addPlayerCount();
            return "You win";
          } else if (computerChoice == "paper") {
            //stayCount();
            return " Tie";
          }
        }
        addComputerCount();

        return "Computer win";
      };

      text_result.innerHTML = winner();

      //result show
      setTimeout(() => {
        results.classList.toggle("results_on");
        player_picked_container.classList.toggle("player_result_animation");
        computer_picked_container.classList.toggle("computer_result_animation");
        setTimeout(() => {
          action_result.classList.toggle("show_action_result");
        }, 1000);
      }, 700);

      // roll game
      setTimeout(() => {
        results.classList.toggle("results_on");
        table.classList.toggle("table_off");
        player_picked_container.classList.toggle("player_result_animation");
        computer_picked_container.classList.toggle("computer_result_animation");
        action_result.classList.toggle("show_action_result");
      }, 4000);
    });
  });
};
PlayStart();

// Game over
const GameOver = () => {
  game_progress.classList.add("game_progress_show");
};
play_again_btn.addEventListener("click", () => {
  window.location.href = "./index.html";
  console.log("Play Again");
});

// reset

reset.addEventListener("click", () => {
  player_score_count = 0;
  computer_score_count = 0;

  player_score.innerHTML = player_score_count;
  computer_score.innerHTML = computer_score_count;
});

rules_btn.addEventListener("click", (e) => {
  rules.classList.toggle("rules_show");
});
rules.addEventListener("click", (e) => {
  rules.classList.toggle("rules_show");
});
