import { Sprite, type Texture } from "pixi.js";
import { bricks, game } from "../";
import { spread } from "./spread";
import { iterations } from "../iterations";

export class Brick extends Sprite {
  isSetToDestroy: boolean;
  brickGroup: number;
  columnIndex: number;
  indexInColumn: number;
  pxAmountToFall: number;
  speed: number;
  acceleration: number;
  rotationDuration: number;
  rotationCounter: number;
  pxToJump: number;
  pxHasJumped: number;
  jumpPhase: number;
  jumpTicker: number;
  jumpStartY: number;
  r: number;
  g: number;
  b: number;
  constructor(texture: Texture) {
    super(texture);
    this.isSetToDestroy = false;
    this.brickGroup = 0;
    this.columnIndex = 0;
    this.indexInColumn = 0;
    this.pxAmountToFall = 0;
    this.speed = 5;
    this.acceleration = 0.01;

    this.alpha = 0;
    this.rotationDuration = 60; // Duration in frames (e.g., 60 frames = 1 second at 60 FPS)
    this.rotationCounter = 0;

    this.pxToJump = 0;
    this.pxHasJumped = 0;
    this.jumpPhase = 0;
    this.jumpTicker = 0;
    this.jumpStartY = 0;

    this.r = 0; // NOT SURE IF NEEDED
    this.g = 0; // NOT SURE IF NEEDED
    this.b = 0; // NOT SURE IF NEEDED
    this.onpointerdown = this.pointerEvent;
    this.cursor = "pointer";
    this.interactive = true;
  }

  pointerEvent = () => {
    this.isSetToDestroy = true;

    bricks.setToDestroy.push(this);

    //
    spread(this);
    //
    iterations.setPxToFall();
    // AT THIS POINT WE HAVE THE BRICKS TO DESTROY AND THE BRICKS ABOVE THEM TO FALL
    // NOW SET THE PX TO JUMP FOR EACH BRICK THAT IS SET TO FALL
    iterations.updateBricksSetToFall();
    //---

    game.app!.ticker.add(iterations.animateBricksSetToDestroy);
  };

  falldown = () => {
    this.speed += this.acceleration;
    const moveBy = Math.min(this.speed, this.pxAmountToFall);
    this.y += moveBy;
    this.pxAmountToFall -= moveBy;
    if (this.pxAmountToFall <= 0) {
      this.pxAmountToFall = 0;
      this.speed = 5;
      const index = bricks.setToFall.indexOf(this);
      if (index !== -1) {
        bricks.setToFall.splice(index, 1);
        bricks.jumping.push(this);
        bricks.jumping.length === 1 &&
          !bricks.isJumping &&
          game.app?.ticker.add(iterations.animateJumps);
        bricks.isJumping = true;
      }
    }
  };

  jumpEffect = () => {
    switch (this.jumpPhase) {
      case 0:
        if (this.pxHasJumped < this.pxToJump) {
          this.y -= 1.5;
          this.pxHasJumped += 1.5;
        } else {
          this.jumpPhase = 1;
          this.pxHasJumped = 0;
        }
        break;
      case 1:
        if (this.pxHasJumped < this.pxToJump) {
          this.y += 1.5;
          this.pxHasJumped += 1.5;
        } else if (this.jumpTicker === 2) {
          this.jumpPhase = 2;
          this.y = this.jumpStartY;
          return;
        } else {
          this.jumpTicker += 1;
          this.pxHasJumped = 0;
          this.pxToJump = this.pxToJump / 3;
          this.jumpPhase = 0;
        }
        break;
      case 2:
        const index = bricks.jumping.indexOf(this);
        if (index !== -1) {
          bricks.jumping.splice(index, 1);
        }
        break;
      default:
        break;
    }
  };
  intro() {
    if (this.alpha < 1) {
      this.alpha += 0.02;
      this.rotation += this.alpha / 5;
    } else {
      this.alpha = 1;
      this.rotationCounter++;
      if (this.rotationCounter < this.rotationDuration) {
        this.rotation += 0.02; // Continue rotating
      } else {
        this.rotation = 0;
        this.alpha = 1;
        this.intro = () => {}; // Stop the intro animation
        // REMOVE THIS FROM brics.intro
        const index = bricks.intro.indexOf(this);
        if (index !== -1) {
          bricks.intro.splice(index, 1);
        }
      }
    }
  }

  animateDestroy() {
    console.log("dissapear");
    if (this.alpha <= 0) {
      this.destroy();
      bricks.setToDestroy.splice(bricks.setToDestroy.indexOf(this), 1);
      this.animateDestroy = () => {};
    } else {
      this.rotation += 0.1;
      this.skew._x += 0.01;
      this.skew._y += 0.01;
      this.alpha -= 0.05;
    }
  }
}
