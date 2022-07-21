export interface Memento {
  getState(): string;
  getDate(): Date;
}

export class MementoState implements Memento {
  private date: Date;

  constructor(private state: string) {
    this.date = new Date();
  }

  getDate(): Date {
    return this.date;
  }

  getState(): string {
    return this.state;
  }
}
