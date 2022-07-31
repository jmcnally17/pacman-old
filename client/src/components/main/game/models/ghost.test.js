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
    scaredGhost.changeScaredState();
    scaredGhost.changeHuntingState();
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

  describe("reset", () => {
    it("changes the ghosts parameters back to their original configuration", () => {
      ghost.position.x += 20;
      ghost.position.y += 20;
      ghost.velocity.x += 5;
      ghost.velocity.y += 10;
      ghost.speed = 16;
      ghost.prevCollisions.push("up");
      ghost.isScared = true;
      const clearSpy = jest.spyOn(global, "clearTimeout");
      ghost.reset();
      expect(ghost.position).toEqual({
        x: 20,
        y: 20,
      });
      expect(ghost.velocity).toEqual({
        x: 7.5,
        y: 2.5,
      });
      expect(ghost.speed).toBe(2.5);
      expect(ghost.prevCollisions).toEqual([]);
      expect(ghost.isScared).toBeFalsy();
      expect(clearSpy).toHaveBeenCalledTimes(1);
    });

    it("leaves isScared and isHunting as false if they are already false", () => {
      scaredGhost.reset();
      expect(scaredGhost.isScared).toBeFalsy();
    });
  });

  describe("resetHuntingState", () => {
    it("changes the hunting state back to false", () => {
      ghost.isHunting = false;
      ghost.resetHuntingState();
      expect(ghost.isHunting).toBeFalsy();
    });

    it("leaves the hunting state as false if it already is", () => {
      ghost.resetHuntingState();
      expect(ghost.isHunting).toBeFalsy();
    });
  });
});
