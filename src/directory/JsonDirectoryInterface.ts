import type { JsonFileInterface } from "../file/index.js";

export interface JsonDirectoryInterface {
  getJson(fileName: string): JsonFileInterface;
  deleteJson(fileName: string): boolean;
  getJsonFiles(): JsonFileInterface[];
}
