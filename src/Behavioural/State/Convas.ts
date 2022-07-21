import { Tool } from "./State";

/**
 * Canvas denotes Context - a type of sheet where different tools perform differently
 */
export class Canvas {
  /**
   * @type {Tool} A reference to the current state of the Context.
   */
  private _tool: Tool;

  constructor(tool: Tool) {
    this._tool = tool;
  }

  /**
   * mouseUp - an action on the tool like request to perform action when mouse up
   */
  public mouseUp() {
    this._tool.mouseUp();
  }

  /**
   * mouseDown - an action on the tool like request to perform action when mouse down
   */
  public mouseDown() {
    this._tool.mouseDown();
  }

  /**
   * changeTool - this works like transitioning the states
   */
  public changeTool(tool: Tool) {
    this._tool = tool;
  }
}
