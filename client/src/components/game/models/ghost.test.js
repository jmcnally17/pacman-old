import Ghost from "./ghost";

let ghost;
let scaredHuntingRetreatingGhost;
let mockRetreatingTimer;
let mockCtx;

describe("Ghost", () => {
  beforeEach(() => {
    ghost = new Ghost(
      {
        position: {
          x: 20,
          y: 20,
        },
        velocity: {
          x: 7.5,
          y: 2.5,
        },
        colour: "red",
      },
      20
    );
    scaredHuntingRetreatingGhost = new Ghost(
      {
        position: {
          x: 20,
          y: 20,
        },
        velocity: {
          x: 7.5,
          y: 2.5,
        },
        colour: "red",
      },
      20
    );
    scaredHuntingRetreatingGhost.isScared = true;
    scaredHuntingRetreatingGhost.isHunting = true;
    scaredHuntingRetreatingGhost.isRetreating = true;
    mockRetreatingTimer = {
      reset: () => undefined,
    };
    scaredHuntingRetreatingGhost.retreatingTimer = mockRetreatingTimer;
    jest.spyOn(mockRetreatingTimer, "reset");
    mockCtx = {
      drawImage: () => undefined,
    };
  });

  describe("upon instantiation", () => {
    it("has a number of instance variables", () => {
      expect(ghost.originalPosition).toEqual({
        x: 20,
        y: 20,
      });
      expect(ghost.position).toEqual({
        x: 20,
        y: 20,
      });
      expect(ghost.originalVelocity).toEqual({
        x: 7.5,
        y: 2.5,
      });
      expect(ghost.velocity).toEqual({
        x: 7.5,
        y: 2.5,
      });
      expect(ghost.tileLength).toBe(20);
      expect(ghost.radius).toBe(7.5);
      expect(ghost.colour).toBe("red");
      expect(ghost.prevCollisions).toEqual([]);
      expect(ghost.speed).toBe(2.5);
      expect(ghost.isScared).toBeFalsy();
      expect(ghost.isHunting).toBeFalsy();
      expect(ghost.isRetreating).toBeFalsy();
      expect(ghost.retreatingTimer).toBeNull();
      expect(ghost.image).toBeInstanceOf(Image);
      expect(ghost.up.src).toBe("http://localhost/images/redGhostUp.png");
      expect(ghost.left.src).toBe("http://localhost/images/redGhostLeft.png");
      expect(ghost.right.src).toBe("http://localhost/images/redGhostRight.png");
      expect(ghost.down.src).toBe("http://localhost/images/redGhostDown.png");
      expect(ghost.scaredBlue.src).toBe(
        "http://localhost/images/scaredGhostBlue.png"
      );
      expect(ghost.eyesUp.src).toBe("http://localhost/images/eyesUp.png");
      expect(ghost.eyesLeft.src).toBe("http://localhost/images/eyesLeft.png");
      expect(ghost.eyesRight.src).toBe("http://localhost/images/eyesRight.png");
      expect(ghost.eyesDown.src).toBe("http://localhost/images/eyesDown.png");
    });
  });

  describe("draw", () => {
    it("calls drawImage on ctx to draw the ghost", () => {
      jest.spyOn(mockCtx, "drawImage");
      ghost.draw(mockCtx);
      expect(mockCtx.drawImage).toHaveBeenCalledTimes(1);
    });
  });

  describe("update", () => {
    it("calls assignSprite and draw and updates the position", () => {
      jest.spyOn(ghost, "assignSprite");
      jest.spyOn(ghost, "draw");
      ghost.update(mockCtx);
      expect(ghost.assignSprite).toHaveBeenCalledTimes(1);
      expect(ghost.draw).toHaveBeenCalledTimes(1);
      expect(ghost.position).toEqual({
        x: 27.5,
        y: 22.5,
      });
    });
  });

  describe("changeScaredState", () => {
    it("can change isScared to true when called", () => {
      ghost.changeScaredState();
      expect(ghost.isScared).toBeTruthy();
    });

    it("can change isScared to false when called", () => {
      scaredHuntingRetreatingGhost.changeScaredState();
      expect(scaredHuntingRetreatingGhost.isScared).toBeFalsy();
    });
  });

  describe("changeHuntingState", () => {
    it("can change isHunting to true when called", () => {
      ghost.changeHuntingState();
      expect(ghost.isHunting).toBeTruthy();
    });

    it("can change isHunting to false when called", () => {
      scaredHuntingRetreatingGhost.changeHuntingState();
      expect(scaredHuntingRetreatingGhost.isHunting).toBeFalsy();
    });
  });

  describe("changeRetreatingState", () => {
    it("can change isRetreating to true when called", () => {
      ghost.changeRetreatingState();
      expect(ghost.isRetreating).toBeTruthy();
    });

    it("can change isRetreating to false when called", () => {
      scaredHuntingRetreatingGhost.changeRetreatingState();
      expect(scaredHuntingRetreatingGhost.isRetreating).toBeFalsy();
    });
  });

  describe("reset", () => {
    it("changes the ghosts parameters back to their original configuration", () => {
      scaredHuntingRetreatingGhost.position.x += 20;
      scaredHuntingRetreatingGhost.position.y += 20;
      scaredHuntingRetreatingGhost.velocity.x += 5;
      scaredHuntingRetreatingGhost.velocity.y += 10;
      scaredHuntingRetreatingGhost.speed = 16;
      scaredHuntingRetreatingGhost.prevCollisions.push("up");
      scaredHuntingRetreatingGhost.reset();
      expect(scaredHuntingRetreatingGhost.position).toEqual({
        x: 20,
        y: 20,
      });
      expect(scaredHuntingRetreatingGhost.velocity).toEqual({
        x: 7.5,
        y: 2.5,
      });
      expect(scaredHuntingRetreatingGhost.speed).toBe(2.5);
      expect(scaredHuntingRetreatingGhost.prevCollisions).toEqual([]);
      expect(scaredHuntingRetreatingGhost.isScared).toBeFalsy();
      expect(scaredHuntingRetreatingGhost.isHunting).toBeFalsy();
      expect(mockRetreatingTimer.reset).toHaveBeenCalledTimes(1);
      expect(scaredHuntingRetreatingGhost.isRetreating).toBeFalsy();
    });

    it("leaves isScared as false if it is already false", () => {
      ghost.retreatingTimer = mockRetreatingTimer;
      ghost.reset();
      expect(ghost.isScared).toBeFalsy();
    });

    it("leaves the hunting state as false if it is already false", () => {
      ghost.retreatingTimer = mockRetreatingTimer;
      ghost.reset();
      expect(ghost.isHunting).toBeFalsy();
    });

    it("leaves the retreating state as false if it is already false", () => {
      ghost.retreatingTimer = mockRetreatingTimer;
      ghost.reset();
      expect(ghost.isRetreating).toBeFalsy();
    });
  });
});
