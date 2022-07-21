import { Task } from "./Task";

export class DataFetcher extends Task {
  doExecute(): void {
    console.log("Fetching Tasks");
  }
}
