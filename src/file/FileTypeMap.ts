import type { CodeFileInterface } from "./CodeFileInterface.js";
import type { FileInterface } from "./FileInterface.js";
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
}

export type KnownDirectoryFileType = keyof FileTypeMap;
export type AnyTypedFileInterface = FileTypeMap[KnownDirectoryFileType];
export type AnyFileInterface = AnyTypedFileInterface | FileInterface;
