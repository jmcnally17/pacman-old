const endGame = (animationId, score) => {
  cancelAnimationFrame(animationId);
  console.log(`Game Over!\nYou scored ${score.points} points.`);
};

module.exports = endGame;
