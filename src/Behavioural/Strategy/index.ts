import { ImageStorage } from "./ImageStorage";
import { JpegImageCompressor } from "./JpegImageCompressor";
const storage = new ImageStorage();

storage.store("jab.jabo", new JpegImageCompressor());
