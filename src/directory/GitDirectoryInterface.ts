import type {
  GitignoreFileInterface,
  GitmodulesFileInterface,
} from "../file/index.js";
import type { TypedDirectoryInterface } from "./TypedDirectoryInterface.js";

export interface GitDirectoryInterface<TDirectory = unknown>
  extends TypedDirectoryInterface<TDirectory> {
  getGitignore(fileName?: string): GitignoreFileInterface;
  deleteGitignore(fileName?: string): boolean;

  getGitmodules(fileName?: string): GitmodulesFileInterface;
  deleteGitmodules(fileName?: string): boolean;
}
