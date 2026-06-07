import type { CodeDirectoryInterface } from "./CodeDirectoryInterface.js";
import type { DirectoryInterface } from "./DirectoryInterface.js";
import type { HtmlDirectoryInterface } from "./HtmlDirectoryInterface.js";
import type { JsonDirectoryInterface } from "./JsonDirectoryInterface.js";
import type { TableDirectoryInterface } from "./TableDirectoryInterface.js";
import type { TextDirectoryInterface } from "./TextDirectoryInterface.js";

export interface TypedDirectoryInterface
  extends DirectoryInterface,
    JsonDirectoryInterface,
    HtmlDirectoryInterface,
    TextDirectoryInterface,
    TableDirectoryInterface,
    CodeDirectoryInterface {}
