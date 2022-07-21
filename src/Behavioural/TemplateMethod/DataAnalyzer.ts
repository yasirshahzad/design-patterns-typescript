import { Task } from "./Task";

export class DataAnalyzer extends Task {
  doExecute(): void {
    console.log("Analyzing Data");
  }
}
