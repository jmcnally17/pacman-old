import PacMan from "./pacman";

let pacman;
let mockCtx;
let mockMunchOne;
let mockMunchTwo;

describe("PacMan", () => {
  beforeEach(() => {
    mockMunchOne = {
      src: "./audio/munch_1.wav",
      play: () => undefined,
    };
    mockMunchTwo = {
      src: "./audio/munch_2.wav",
      play: () => undefined,
    };
    pacman = new PacMan(
      {
        position: {
          x: 290,
          y: 470,
        },
        velocity: {
          x: 7.5,
          y: 2.5,
        },
      },
      mockMunchOne,
      mockMunchTwo
    );
    mockCtx = {
      save: () => undefined,
      translate: () => undefined,
      rotate: () => undefined,
      beginPath: () => undefined,
      arc: () => undefined,
      lineTo: () => undefined,
      fillStyle: "",
      fill: () => undefined,
      closePath: () => undefined,
      restore: () => undefined,
    };
  });

  describe("upon instantiation", () => {
    it("has a number of instance variables", () => {
      expect(pacman.originalPosition).toEqual({
        x: 290,
        y: 470,
      });
      expect(pacman.position).toEqual({
        x: 290,
        y: 470,
      });
      expect(pacman.originalVelocity).toEqual({
        x: 7.5,
        y: 2.5,
      });
      expect(pacman.velocity).toEqual({
        x: 7.5,
        y: 2.5,
      });
      expect(pacman.radius).toBe(7.5);
      expect(pacman.speed).toBe(2.5);
      expect(pacman.radians).toEqual(Math.PI / 4);
      expect(pacman.openRate).toEqual(Math.PI / 36);
      expect(pacman.rotation).toBe(0);
      expect(pacman.lives).toBe(2);
      expect(pacman.munchOne).toBe(mockMunchOne);
      expect(pacman.munchTwo).toBe(mockMunchTwo);
      expect(pacman.munchOne.src).toBe("./audio/munch_1.wav");
      expect(pacman.munchTwo.src).toBe("./audio/munch_2.wav");
    });
  });

  describe("draw", () => {
    it("calls the necessary functions on ctx to draw Pac-Man", () => {
      const saveSpy = jest.spyOn(mockCtx, "save");
      const translateSpy = jest.spyOn(mockCtx, "translate");
      const rotateSpy = jest.spyOn(mockCtx, "rotate");
      const beginPathSpy = jest.spyOn(mockCtx, "beginPath");
      const arcSpy = jest.spyOn(mockCtx, "arc");
      const lineToSpy = jest.spyOn(mockCtx, "lineTo");
      const fillSpy = jest.spyOn(mockCtx, "fill");
      const closePathSpy = jest.spyOn(mockCtx, "closePath");
      const restoreSpy = jest.spyOn(mockCtx, "restore");
      pacman.draw(mockCtx);
      expect(saveSpy).toHaveBeenCalledTimes(1);
      expect(translateSpy).toHaveBeenCalledTimes(2);
      expect(rotateSpy).toHaveBeenCalledTimes(1);
      expect(beginPathSpy).toHaveBeenCalledTimes(1);
      expect(arcSpy).toHaveBeenCalledTimes(1);
      expect(lineToSpy).toHaveBeenCalledTimes(1);
      expect(fillSpy).toHaveBeenCalledTimes(1);
      expect(closePathSpy).toHaveBeenCalledTimes(1);
      expect(restoreSpy).toHaveBeenCalledTimes(1);
      expect(mockCtx.fillStyle).toBe("yellow");
    });
  });

  describe("update", () => {
    it("calls the necessary functions and updates Pac-Man's position", () => {
      const checkRotationSpy = jest.spyOn(pacman, "checkRotation");
      const drawSpy = jest.spyOn(pacman, "draw");
      pacman.update(mockCtx);
      expect(checkRotationSpy).toHaveBeenCalledTimes(1);
      expect(drawSpy).toHaveBeenCalledTimes(1);
      expect(pacman.position).toEqual({
        x: 297.5,
        y: 472.5,
      });
    });

    it("calls chomp if Pac-Man is moving", () => {
      const chompSpy = jest.spyOn(pacman, "chomp");
      pacman.update(mockCtx);
      expect(chompSpy).toHaveBeenCalledTimes(1);
    });

    it("sets the radians back to PI / 4 if Pac-Man is not moving", () => {
      pacman.velocity = {
        x: 0,
        y: 0,
      };
      pacman.radians = 0;
      pacman.update(mockCtx);
      expect(pacman.radians).toBe(Math.PI / 4);
    });
  });

  describe("chomp", () => {
    it("adds the openRate to the radians", () => {
      pacman.chomp();
      expect(pacman.radians).toBe((10 * Math.PI) / 36);
    });

    it("multiplies the openRate by -1 and plays munchTwo when the radians becomes greater than PI / 4", () => {
      const munchTwoSpy = jest.spyOn(mockMunchTwo, "play");
      pacman.radians = Math.PI / 2;
      expect(pacman.openRate).toBe(Math.PI / 36);
      pacman.chomp();
      expect(pacman.openRate).toBe(-Math.PI / 36);
      expect(munchTwoSpy).toHaveBeenCalledTimes(1);
    });

    it("multiplies the openRate by -1 and plays munchTwo when the radians becomes smaller than PI / 36", () => {
      const munchOneSpy = jest.spyOn(mockMunchOne, "play");
      pacman.radians = 0;
      pacman.openRate = -Math.PI / 36;
      pacman.chomp();
      expect(pacman.openRate).toBe(Math.PI / 36);
      expect(munchOneSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("checkRotation", () => {
    it("sets Pac-Man's rotation to 0 when moving to the right", () => {
      pacman.rotation = Math.PI;
      pacman.velocity = {
        x: 5,
        y: 0,
      };
      pacman.checkRotation();
      expect(pacman.rotation).toBe(0);
    });

    it("sets Pac-Man's rotation to PI when moving to the left", () => {
      pacman.velocity = {
        x: -5,
        y: 0,
      };
      pacman.checkRotation();
      expect(pacman.rotation).toBe(Math.PI);
    });

    it("sets Pac-Man's rotation to PI / 2 when moving downwards", () => {
      pacman.velocity = {
        x: 0,
        y: 5,
      };
      pacman.checkRotation();
      expect(pacman.rotation).toBe(Math.PI / 2);
    });

    it("sets Pac-Man's rotation to 3 * PI / 2 when moving upwards", () => {
      pacman.velocity = {
        x: 0,
        y: -5,
      };
      pacman.checkRotation();
      expect(pacman.rotation).toBe((3 * Math.PI) / 2);
    });
  });

  describe("reset", () => {
    it("puts Pac-Man back into original position, original velocity and sets the rotation back to 0", () => {
      pacman.position.x += 20;
      pacman.position.y += 20;
      pacman.velocity.x += 5;
      pacman.velocity.y += 10;
      pacman.rotation += Math.PI;
      pacman.reset();
      expect(pacman.position).toEqual({
        x: 290,
        y: 470,
      });
      expect(pacman.velocity).toEqual({
        x: 7.5,
        y: 2.5,
      });
      expect(pacman.rotation).toBe(0);
    });
  });
});
