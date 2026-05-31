import type { TableDataTypeInterface } from "@frxnklyn/datatypes";
import type { FileInterface } from "./FileInterface.js";

export interface TableFileInterface
  extends FileInterface<string>,
    TableDataTypeInterface {}
