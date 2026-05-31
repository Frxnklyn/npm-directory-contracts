import type { CodeFileInterface } from "./CodeFileInterface.js";
import type { FileInterface } from "./FileInterface.js";
import type { GitignoreFileInterface } from "./GitignoreFileInterface.js";
import type { GitmodulesFileInterface } from "./GitmodulesFileInterface.js";
import type { HtmlFileInterface } from "./HtmlFileInterface.js";
import type { JsonFileInterface } from "./JsonFileInterface.js";
import type { TableFileInterface } from "./TableFileInterface.js";
import type { TextFileInterface } from "./TextFileInterface.js";

export interface FileTypeMap {
  json: JsonFileInterface;
  txt: TextFileInterface;
  csv: TableFileInterface;
  ts: CodeFileInterface;
  html: HtmlFileInterface;
  htm: HtmlFileInterface;
  gitignore: GitignoreFileInterface;
  gitmodules: GitmodulesFileInterface;
}

export type KnownDirectoryFileType = keyof FileTypeMap;
export type AnyTypedFileInterface = FileTypeMap[KnownDirectoryFileType];
export type AnyFileInterface = AnyTypedFileInterface | FileInterface;
