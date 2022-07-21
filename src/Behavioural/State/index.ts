import { Brush } from "./Brush";
import { Canvas } from "./Convas";
import { Pencil } from "./Pencil";

const convas = new Canvas(new Brush());
convas.mouseDown();

convas.changeTool(new Pencil());
convas.mouseDown();
