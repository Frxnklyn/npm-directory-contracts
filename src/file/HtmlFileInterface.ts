import type { HtmlDataTypeInterface } from "@frxnklyn/datatypes";
import type { FileInterface } from "./FileInterface.js";

export interface HtmlFileInterface
  extends FileInterface<string>,
    HtmlDataTypeInterface {}
