import { Canvas } from "./Convas";
/**
 * Tool interface denotes {State}
 */
export interface Tool {
  mouseUp(): void;
  mouseDown(): void;
}
