import { ImageCompressor } from "./Strategy";
export class JpegImageCompressor implements ImageCompressor {
  compress(path: string): void {
    console.log("compressing image using jpeg");
  }
}
