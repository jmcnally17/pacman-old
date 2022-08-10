import Ghost from "./ghost";

let ghost;

describe("Ghost", () => {
  beforeEach(() => {
    ghost = new Ghost(
      {
        position: {
          x: 50,
          y: 50,
        },
        colour: "orange",
      },
      20
    );
  });

  describe("assignSprite", () => {
    it("assigns the upwards looking sprite when moving up and not scared or retreating", () => {
      ghost.velocity = {
        y: -2.5,
      };
      ghost.assignSprite();
      expect(ghost.image.src).toBe("http://localhost/images/orangeGhostUp.png");
    });

    it("assigns the leftwards looking sprite when moving to the left and not scared or retreating", () => {
      ghost.velocity = {
        x: -2.5,
      };
      ghost.assignSprite();
      expect(ghost.image.src).toBe(
        "http://localhost/images/orangeGhostLeft.png"
      );
    });

    it("assigns the rightwards looking sprite when moving to the right and not scared or retreating", () => {
      ghost.velocity = {
        x: 2.5,
      };
      ghost.assignSprite();
      expect(ghost.image.src).toBe(
        "http://localhost/images/orangeGhostRight.png"
      );
    });

    it("assigns the downwards looking sprite when moving down and not scared or retreating", () => {
      ghost.velocity = {
        y: 2.5,
      };
      ghost.assignSprite();
      expect(ghost.image.src).toBe(
        "http://localhost/images/orangeGhostDown.png"
      );
    });

    it("assigns the scared blue sprite when the ghost is scared", () => {
      ghost.changeScaredState();
      ghost.assignSprite();
      expect(ghost.image.src).toBe(
        "http://localhost/images/scaredGhostBlue.png"
      );
    });

    it("assigns the upwards looking eyes sprite when moving up and retreating", () => {
      ghost.changeRetreatingState();
      ghost.velocity = {
        y: -2.5,
      };
      ghost.assignSprite();
      expect(ghost.image.src).toBe("http://localhost/images/eyesUp.png");
    });

    it("assigns the leftwards looking eyes sprite when moving to the left and retreating", () => {
      ghost.changeRetreatingState();
      ghost.velocity = {
        x: -2.5,
      };
      ghost.assignSprite();
      expect(ghost.image.src).toBe("http://localhost/images/eyesLeft.png");
    });

    it("assigns the rightwards looking eyes sprite when moving to the right and retreating", () => {
      ghost.changeRetreatingState();
      ghost.velocity = {
        x: 2.5,
      };
      ghost.assignSprite();
      expect(ghost.image.src).toBe("http://localhost/images/eyesRight.png");
    });

    it("assigns the downwards looking eyes sprite when moving down and retreating", () => {
      ghost.changeRetreatingState();
      ghost.velocity = {
        y: 2.5,
      };
      ghost.assignSprite();
      expect(ghost.image.src).toBe("http://localhost/images/eyesDown.png");
    });
  });
});
