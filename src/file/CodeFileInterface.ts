import type { CodeDataTypeInterface } from "@frxnklyn/datatypes";
import type { FileInterface } from "./FileInterface.js";

export interface CodeFileInterface
  extends FileInterface<string>,
    CodeDataTypeInterface {}
