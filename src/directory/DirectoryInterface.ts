import type {
  AnyFileInterface,
  FileInterface,
  FileTypeMap,
  KnownDirectoryFileType,
} from "../file/index.js";
import type { FolderStructure } from "./FolderStructure.js";

export interface DirectoryInterface<TDirectory = unknown> {
  getPath(): string;
  setPath(targetPath: string): TDirectory;
  resetPath(): TDirectory;

  stepBack(levels?: number): TDirectory;
  getParent(levels?: number): TDirectory;
  getChild(subPath: string): TDirectory;
  moveTo(subPath: string): TDirectory;
  navigateToPath(targetPath: string): string;

  addFolder(folderName: string): TDirectory;
  deleteFolder(folderName: string): void;

  addFile<K extends KnownDirectoryFileType>(fileName: string, fileType: K): FileInterface;
  addFile(file: string): FileInterface;

  getFile<K extends KnownDirectoryFileType>(fileName: string, fileType: K): FileTypeMap[K];
  getFile(file: string): FileInterface;

  deleteFile(fileName: string, fileType: KnownDirectoryFileType): boolean;
  deleteFile(file: string | FileInterface): boolean;

  fileExists(fileName: string, fileType: KnownDirectoryFileType): boolean;
  fileExists(file: string): boolean;

  getFolders(): string[];
  getContents(): string[];
  getDirectories(): TDirectory[];
  getFiles(): AnyFileInterface[];

  getFileOfType<K extends KnownDirectoryFileType>(fileType: K): FileTypeMap[K][];
  getFileOfType(fileType: string): AnyFileInterface[];
  getFilesOfType<K extends KnownDirectoryFileType>(fileType: K): FileTypeMap[K][];
  getFilesOfType(fileType: string): AnyFileInterface[];

  getFolderStructureJson(): FolderStructure;
  findFile(fileName: string, fileType?: KnownDirectoryFileType): AnyFileInterface;
  findFiles(fileName: string, fileType?: KnownDirectoryFileType): AnyFileInterface[];
}
