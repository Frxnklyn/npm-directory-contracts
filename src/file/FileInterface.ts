export interface FileInterface<TContent = unknown> {
  getName(): string;
  getFileType(): string;
  getFilePath(): string;
  getFolderName(): string;

  getData(): TContent;
  getContent(): TContent;
  getContentString(): string;

  update(): void;
  delete(): this;
}
