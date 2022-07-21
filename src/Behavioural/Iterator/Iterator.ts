export interface MyIterator<T> {
  hasNext(): boolean;
  next(): void;
  getCurrent(): T;
}
