import "./leaderboard.css";
import Game from "../game/game";
import { useEffect, useState } from "react";

let url;
if (process.env.REACT_APP_URL) {
  url = `${process.env.REACT_APP_URL}/backend/scores`;
} else {
  url = "http://localhost:9000/backend/scores";
}

export default function Leaderboard({ score, mainEl, name }) {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        while (data.scores.length < 10) {
          data.scores.push({
            name: "--",
            points: "--",
          });
        }
        return data.scores;
      })
      .then((scores) => setScores(scores));
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
      <table className="list">
        <tbody>
          <tr>
            <th className="rankHeader">Rank</th>
            <th className="nameHeader">Name</th>
            <th className="scoreHeader">Score</th>
          </tr>
          {scores.map((score, index) => {
            return (
              <tr className="entry" key={index}>
                <td className="rank">{index + 1}</td>
                <td className="name">{score.name}</td>
                <td className="points">{score.points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
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
