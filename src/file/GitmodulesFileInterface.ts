import type { TextFileInterface } from "./TextFileInterface.js";

export interface GitSubmoduleInterface {
  name: string;
  path: string;
  url: string;
  branch?: string;
}

export interface GitmodulesFileInterface extends TextFileInterface {
  getSubmodules(): GitSubmoduleInterface[];
  addSubmodule(submodule: GitSubmoduleInterface): this;
  deleteSubmodule(nameOrPath: string): this;
  getSubmodule(nameOrPath: string): GitSubmoduleInterface | undefined;
}
