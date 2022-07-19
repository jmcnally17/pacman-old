import "./leaderboard.css";
import Game from "../game/game";

export default function Leaderboard({ score, mainEl, name }) {
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
      <button onClick={handlePlayAgain}>Play Again</button>
      <button onClick={handleChangePlayer}>Change Player</button>
    </div>
  );
}
