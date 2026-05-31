import type { TableFileInterface } from "../file/index.js";

export interface TableDirectoryInterface {
  getCsvFiles(): TableFileInterface[];
  deleteCsv(fileName: string): boolean;
  deleteCSV(fileName: string): boolean;
}
