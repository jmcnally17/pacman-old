import "./leaderboard.css";
import Game from "../game/game";
import { useEffect } from "react";

let url;
if (process.env.REACT_APP_URL) {
  url = `${process.env.REACT_APP_URL}/backend/scores`;
} else {
  url = "http://localhost:9000/backend/scores";
}

export default function Leaderboard({ score, mainEl, name }) {
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data.scores));
  }, []);

  const handlePlayAgain = () => {
    score.points = 0;
    mainEl.render(<Game name={name} mainEl={mainEl} />);
  };

  const handleChangePlayer = () => {
    window.location.reload();
  };

  return (
    <div className="leaderboard">
      <h1>Game Over</h1>
      <h4>You scored {score.points} points</h4>
      <div className="buttons">
        <button className="playAgain" onClick={handlePlayAgain}>
          Play Again
        </button>
        <button className="changePlayer" onClick={handleChangePlayer}>
          Change Player
        </button>
      </div>
    </div>
  );
}
