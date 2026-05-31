import type { JsonDataTypeInterface, JsonValue } from "@frxnklyn/datatypes";
import type { FileInterface } from "./FileInterface.js";

export interface JsonFileInterface
  extends FileInterface<JsonValue>,
    JsonDataTypeInterface {}
