import { Tool } from "./State";

/**
 * Pencil denotes ConcreteStateA
 */
export class Pencil implements Tool {
  constructor() {}
  mouseUp(): void {
    console.log("Pencil: mouseUp()");
  }
  mouseDown(): void {
    console.log("Pencil: mouseDown()");
  }
}
