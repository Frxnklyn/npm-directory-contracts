import type { TextDataTypeInterface } from "@frxnklyn/datatypes";
import type { FileInterface } from "./FileInterface.js";

export interface TextFileInterface
  extends FileInterface<string>,
    TextDataTypeInterface {}
