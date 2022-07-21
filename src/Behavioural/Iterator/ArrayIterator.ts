import { MyIterator } from "./Iterator";
import { BrowserHistory } from "./Client";
export class ArrayIterator implements MyIterator<string> {
  private index = 0;

  constructor(private collection: BrowserHistory) {}

  hasNext(): boolean {
    return this.index < this.collection.getItems().length;
  }

  next(): void {
    this.index += 1;
  }

  getCurrent(): string {
    return this.collection.getItems()[this.index];
  }
}
