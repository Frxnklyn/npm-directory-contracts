import type { TextFileInterface } from "../file/index.js";

export interface TextDirectoryInterface {
  getTextFiles(): TextFileInterface[];
  deleteTextFile(fileName: string): boolean;
  deleteTxt(fileName: string): boolean;
}
