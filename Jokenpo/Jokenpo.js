//score 
let score = {
  wins: 0,
  loss: 0,
  draw: 0
};

const p = document.querySelector(".results");
const p2 = document.querySelector(".score");
const div = document.querySelector('div');

function game() {
    div.addEventListener("click", e => {

      //variables to track moves and results
      let user_move = e.target.dataset.value;
      let computer_move; 
      let result;
      

      //randomly selecting computer moves
      value = Math.random();

      if (0 <= value && value < 1 / 3) {
        computer_move = "Rock";
      } else if (1 / 3 <= value && value < 2 / 3) {
        computer_move = "Paper";
      } else if (2 / 3 <= value && value <= 1) {
        computer_move = "Scissor";
      }

      
      //make comparisions to create result
      if (user_move === "Rock") {
        if (computer_move === "Rock") {
          score.draw++;
          result = "Tied";
        } else if (computer_move === "Paper") {
          score.loss++;
          result = "Lost";
        } else if (computer_move === "Scissor") {
          score.wins++;
          let result = "Won";
        }
      }

      if (user_move === "Paper") {
        if (computer_move === "Rock") {
          score.wins++;
          result = "Won";
        } else if (computer_move === "Paper") {
          score.draw++;
          result = "Tied";
        } else if (computer_move === "Scissor") {
          score.loss++;
          result = "Lost";
        }
      }

      if (user_move === "Scissor") {
        if (computer_move === "Rock") {
          score.loss++;
          result = "Lost";
        } else if (computer_move === "Paper") {
          score.wins++;
          result = "Won";
        } else if (computer_move === "Scissor") {
          score.draw++;
          result = "Tied";
        }
      }

      //updating text
      p.textContent = `You Selected ${user_move}, The computer Selected ${computer_move}, You ${result}`;
      p2.textContent = `W: ${score.wins}   L: ${score.loss}   T: ${score.draw}`
      
    });

};

game();