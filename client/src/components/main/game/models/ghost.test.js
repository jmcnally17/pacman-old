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
      expect(ghost.radius).toBe(7.5);
      expect(ghost.colour).toBe("red");
      expect(ghost.prevCollisions).toEqual([]);
      expect(ghost.speed).toBe(2.5);
      expect(ghost.isScared).toBe(false);
      expect(ghost.scaredTimeout).toBe(null);
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
      expect(ghost.position.x).toBe(27.5);
      expect(ghost.position.y).toBe(22.5);
    });
  });

  describe("changeScaredState", () => {
    it("can change isScared to true when called", () => {
      ghost.changeScaredState();
      expect(ghost.isScared).toBe(true);
    });

    it("can make the ghost unscared when called", () => {
      scaredGhost.changeScaredState();
      expect(scaredGhost.isScared).toBe(false);
    });
  });

  describe("reset", () => {
    it("changes the ghosts paramters back to their original configuration", () => {
      ghost.position.x += 20;
      ghost.position.y += 20;
      ghost.velocity.x += 5;
      ghost.velocity.y += 10;
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
      expect(ghost.prevCollisions).toEqual([]);
      expect(ghost.isScared).toBeFalsy();
      expect(clearSpy).toHaveBeenCalledTimes(1);
    });

    it("leaves isScared as false if it is already false", () => {
      ghost.reset();
      expect(ghost.isScared).toBeFalsy();
    });
  });
});
