import { Task } from "./Task";
/**
 * Worker
 */
export class Worker {
  constructor(private tasks: Task[]) {}

  /**
   * executeAllTasks
   */
  public executeAllTasks() {
    this.tasks.forEach((task) => task.execute());
  }
}
