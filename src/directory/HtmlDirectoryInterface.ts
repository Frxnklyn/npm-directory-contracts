import type { HtmlFileInterface } from "../file/index.js";

export interface HtmlDirectoryInterface {
  getHtml(fileName: string): HtmlFileInterface;
  deleteHtml(fileName: string, fileType?: "html" | "htm"): boolean;
  getHtmlFiles(): HtmlFileInterface[];
}
