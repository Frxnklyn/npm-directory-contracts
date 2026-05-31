import type { CodeFileInterface } from "../file/index.js";

export interface CodeDirectoryInterface {
  getTypeScriptFiles(): CodeFileInterface[];
  deleteTypeScript(fileName: string): boolean;
  deleteTS(fileName: string): boolean;
}
