import { ArrayIterator } from "./ArrayIterator";
import { MyIterator } from "./Iterator";

export class BrowserHistory {
  private items: string[] = [];

  constructor() {}

  public getItems(): string[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public addItem(item: string): void {
    this.items.push(item);
  }

  public getIterator(): MyIterator<string> {
    return new ArrayIterator(this);
  }
}
