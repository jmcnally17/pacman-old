import Ghost from "./ghost";

let ghost;
let scaredGhost;
let mockImage;
let mockCtx;
let ctxSpy;

describe("Ghost", () => {
  beforeEach(() => {
    mockImage = {
      src: "./randomSource",
    };
    ghost = new Ghost({
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
    });
    scaredGhost = new Ghost({
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
    });
    scaredGhost.changeScaredState();
    mockCtx = {
      drawImage: () => undefined,
    };
    ctxSpy = jest.spyOn(mockCtx, "drawImage");
  });

  it("has a static speed class variable", () => {
    expect(Ghost.speed).toBe(2.5);
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
      ghost.draw(mockCtx);
      expect(ctxSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("update", () => {
    it("calls draw which calls drawImage and updates the position", () => {
      ghost.update(mockCtx);
      expect(ctxSpy).toHaveBeenCalledTimes(1);
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
    it("changes the ghosts position and velocity back to their original values, as well as emptying the previous collisions array", () => {
      ghost.position.x += 20;
      ghost.position.y += 20;
      ghost.velocity.x += 5;
      ghost.velocity.y += 10;
      ghost.prevCollisions.push("up");
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
    });
  });
});
