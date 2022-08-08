import Ghost from "./ghost";

let ghost;
let scaredGhost;
let mockImage;
let mockCtx;

describe("Ghost", () => {
  beforeEach(() => {
    mockImage = {
      src: "./randomSource",
    };
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
        image: mockImage,
      },
      20
    );
    scaredGhost = new Ghost(
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
        image: mockImage,
      },
      20
    );
    scaredGhost.isScared = true;
    scaredGhost.isHunting = true;
    scaredGhost.isRetreating = true;
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
      expect(ghost.length).toBe(20);
      expect(ghost.radius).toBe(7.5);
      expect(ghost.colour).toBe("red");
      expect(ghost.prevCollisions).toEqual([]);
      expect(ghost.speed).toBe(2.5);
      expect(ghost.isScared).toBeFalsy();
      expect(ghost.scaredTimeout).toBeNull();
      expect(ghost.isHunting).toBeFalsy();
      expect(ghost.huntingInterval).toBeNull();
      expect(ghost.isRetreating).toBeFalsy();
      expect(ghost.retreatingTimeout).toBeNull();
      expect(ghost.image).toEqual({
        src: "./randomSource",
      });
    });
  });

  describe("draw", () => {
    it("calls drawImage on ctx to draw the ghost", () => {
      const ctxSpy = jest.spyOn(mockCtx, "drawImage");
      ghost.draw(mockCtx);
      expect(ctxSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("update", () => {
    it("calls draw and updates the position", () => {
      const ghostSpy = jest.spyOn(ghost, "draw");
      ghost.update(mockCtx);
      expect(ghostSpy).toHaveBeenCalledTimes(1);
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
      scaredGhost.changeScaredState();
      expect(scaredGhost.isScared).toBeFalsy();
    });
  });

  describe("changeHuntingState", () => {
    it("can change isHunting to true when called", () => {
      ghost.changeHuntingState();
      expect(ghost.isHunting).toBeTruthy();
    });

    it("can change isHunting to false when called", () => {
      scaredGhost.changeHuntingState();
      expect(scaredGhost.isHunting).toBeFalsy();
    });
  });

  describe("changeRetreatingState", () => {
    it("can change isRetreating to true when called", () => {
      ghost.changeRetreatingState();
      expect(ghost.isRetreating).toBeTruthy();
    });

    it("can change isRetreating to false when called", () => {
      scaredGhost.changeRetreatingState();
      expect(scaredGhost.isRetreating).toBeFalsy();
    });
  });

  describe("reset", () => {
    it("changes the ghosts parameters back to their original configuration", () => {
      scaredGhost.position.x += 20;
      scaredGhost.position.y += 20;
      scaredGhost.velocity.x += 5;
      scaredGhost.velocity.y += 10;
      scaredGhost.speed = 16;
      scaredGhost.prevCollisions.push("up");
      const clearSpy = jest.spyOn(global, "clearTimeout");
      scaredGhost.reset();
      expect(scaredGhost.position).toEqual({
        x: 20,
        y: 20,
      });
      expect(scaredGhost.velocity).toEqual({
        x: 7.5,
        y: 2.5,
      });
      expect(scaredGhost.speed).toBe(2.5);
      expect(scaredGhost.prevCollisions).toEqual([]);
      expect(scaredGhost.isScared).toBeFalsy();
      expect(clearSpy).toHaveBeenCalledTimes(1);
    });

    it("leaves isScared as false if it is already false", () => {
      ghost.reset();
      expect(ghost.isScared).toBeFalsy();
    });
  });

  describe("resetHuntingState", () => {
    it("changes the hunting state back to false and clears the hunting interval", () => {
      const clearIntervalSpy = jest.spyOn(global, "clearInterval");
      scaredGhost.resetHuntingState();
      expect(scaredGhost.isHunting).toBeFalsy();
      expect(clearIntervalSpy).toHaveBeenCalledTimes(1);
    });

    it("leaves the hunting state as false if it is already false", () => {
      ghost.resetHuntingState();
      expect(ghost.isHunting).toBeFalsy();
    });
  });

  describe("resetRetreatingState", () => {
    it("changes the retreating state back to false and clears the retreating timeout", () => {
      const clearTimeoutSpy = jest.spyOn(global, "clearTimeout");
      scaredGhost.resetRetreatingState();
      expect(scaredGhost.isRetreating).toBeFalsy();
      expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);
    });

    it("leaves the retreating state as false if it is already false", () => {
      ghost.resetRetreatingState();
      expect(ghost.isRetreating).toBeFalsy();
    });
  });
});
