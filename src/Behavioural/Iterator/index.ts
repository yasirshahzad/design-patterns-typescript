import { BrowserHistory } from "./Client";
const history = new BrowserHistory();

history.addItem("http://google.com");
history.addItem("http://yahoo.com");

const iterator = history.getIterator();

for (; iterator.hasNext(); iterator.next()) {
  console.log(iterator.getCurrent());
}
