import { DataAnalyzer } from "./DataAnalyzer";
import { DataFetcher } from "./DataFetcher";
import { Worker } from "./Worker";

const worker = new Worker([new DataFetcher(), new DataAnalyzer()]);
worker.executeAllTasks();
