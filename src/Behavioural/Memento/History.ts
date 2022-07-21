import { Memento } from "./MementoState";
import { Originator } from "./Originator";

export class History {
  private mementos: Memento[] = [];
  constructor(private originator: Originator) {}

  /**
   * save - save the current state of originator
   */
  public save() {
    const state: Memento = this.originator.getState();
    this.mementos.push(state);
  }

  /**
   * undo - restore the state to originator
   */
  public undo() {
    if (!this.mementos.length) return;

    const memento = this.mementos.pop();

    memento && this.originator.restore(memento);
  }

  /**
   * showHistory
   */
  public showHistory(): Memento[] {
    return this.mementos;
  }
}
