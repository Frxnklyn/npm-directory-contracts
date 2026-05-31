import type { TextFileInterface } from "./TextFileInterface.js";

export interface GitignorePathInterface {
  getFilePath(): string;
}

export interface GitignoreFileInterface extends TextFileInterface {
  addIgnore(input: string | GitignorePathInterface): this;
  deleteIgnore(input: string | GitignorePathInterface): this;
}
