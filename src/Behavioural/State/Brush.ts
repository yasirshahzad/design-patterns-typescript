import { Tool } from "./State";

/**
 * Brush denotes ConcreteStateB
 */
export class Brush implements Tool {
  constructor() {}
  mouseUp(): void {
    console.log("Brush: mouseUp()");
  }
  mouseDown(): void {
    console.log("Brush: mouseDown()");
  }
}
