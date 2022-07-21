import { Originator } from "./Originator";
import { History } from "./History";

const originator = new Originator();
const history = new History(originator);

originator.content = "java java";
history.save();

originator.content = "java java2";
history.save();

originator.content = "Java java3";

history.undo();

console.log(originator.content);
