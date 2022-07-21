import { ImageCompressor } from "./Strategy";

/**
 * ImageStorage class for storing the images a storage service
 */
export class ImageStorage {
  /**
   * store - store images.
   * @param {string} path
   * @returns {string | never} public url
   */
  public store(path: string, compressor: ImageCompressor): string | never {
    compressor.compress(path);

    // send the public url after upload
    return "";
  }
}
