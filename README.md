# @frxnklyn/directory-contracts

Reine TypeScript-Interfaces fuer Datei- und Ordner-APIs.

Dieses Package enthaelt keine File-System-Logik. Es beschreibt nur die Contracts, die z.B. `@frxnklyn/file-manager` implementieren kann.

## Interfaces

- `FileInterface<TContent>`
- `DirectoryInterface`
- `TypedDirectoryInterface`
- `JsonFileInterface`
- `TextFileInterface`
- `TableFileInterface`
- `CodeFileInterface`
- `HtmlFileInterface`

## DataTypes

Dieses Package nutzt `@frxnklyn/datatypes`.

Beispiel:

```ts
export interface JsonFileInterface
  extends FileInterface<JsonValue>,
    JsonDataTypeInterface {}
```

Dadurch kombiniert eine JSON-Datei die normalen Datei-Funktionen mit den JSON-DataType-Funktionen.

## Directory

`DirectoryInterface` enthaelt die allgemeinen Ordnerfunktionen:

- `getPath()`
- `setPath(targetPath)`
- `resetPath()`
- `stepBack(levels)`
- `getParent(levels)`
- `getChild(subPath)`
- `moveTo(subPath)`
- `navigateToPath(targetPath)`
- `addFolder(folderName)`
- `deleteFolder(folderName)`
- `addFile(...)`
- `getFile(...)`
- `deleteFile(...)`
- `fileExists(...)`
- `getFolders()`
- `getContents()`
- `getDirectories()`
- `getFiles()`
- `getFileOfType(...)`
- `getFilesOfType(...)`
- `getFolderStructureJson()`
- `findFile(...)`
- `findFiles(...)`

## Typed Directory

`TypedDirectoryInterface` erweitert `DirectoryInterface` um typisierte Helfer:

- `getJson(fileName)`
- `deleteJson(fileName)`
- `getJsonFiles()`
- `getHtml(fileName)`
- `deleteHtml(fileName, fileType)`
- `getHtmlFiles()`
- `getTextFiles()`
- `deleteTextFile(fileName)`
- `deleteTxt(fileName)`
- `getCsvFiles()`
- `deleteCsv(fileName)`
- `deleteCSV(fileName)`
- `getTypeScriptFiles()`
- `deleteTypeScript(fileName)`
- `deleteTS(fileName)`

## Build

```bash
npm install
npm run build
```
