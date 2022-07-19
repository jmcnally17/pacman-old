import "./leaderboard.css";

export default function Leaderboard({ points }) {
  return (
    <div className="leaderboard">
      <h1>Game Over</h1>
      <h4>You scored {points} points</h4>
    </div>
  );
}
