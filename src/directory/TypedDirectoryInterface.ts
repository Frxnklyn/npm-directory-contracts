import type {
  CodeFileInterface,
  HtmlFileInterface,
  JsonFileInterface,
  TableFileInterface,
  TextFileInterface,
} from "../file/index.js";
import type { DirectoryInterface } from "./DirectoryInterface.js";

export interface TypedDirectoryInterface<TDirectory = unknown>
  extends DirectoryInterface<TDirectory> {
  getJson(fileName: string): JsonFileInterface;
  deleteJson(fileName: string): boolean;
  getJsonFiles(): JsonFileInterface[];

  getHtml(fileName: string): HtmlFileInterface;
  deleteHtml(fileName: string, fileType?: "html" | "htm"): boolean;
  getHtmlFiles(): HtmlFileInterface[];

  getTextFiles(): TextFileInterface[];
  deleteTextFile(fileName: string): boolean;
  deleteTxt(fileName: string): boolean;

  getCsvFiles(): TableFileInterface[];
  deleteCsv(fileName: string): boolean;
  deleteCSV(fileName: string): boolean;

  getTypeScriptFiles(): CodeFileInterface[];
  deleteTypeScript(fileName: string): boolean;
  deleteTS(fileName: string): boolean;
}
