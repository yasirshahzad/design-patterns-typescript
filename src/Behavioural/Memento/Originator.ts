import { MementoState, Memento } from "./MementoState";
export class Originator {
  private _content: string = "";

  public get content(): string {
    return this._content;
  }

  public set content(v: string) {
    this._content = v;
  }

  /**
   * Returns a snapshot of current state
   * @returns {MementoState} a snapshot of current state
   */
  public getState(): Memento {
    return new MementoState(this._content);
  }

  /**
   * restore
   * @param {Memento} memento state to restore
   */
  public restore(memento: Memento) {
    this._content = memento.getState();
  }
}
