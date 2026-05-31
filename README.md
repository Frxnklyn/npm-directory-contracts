# @frxnklyn/directory-contracts

Reine TypeScript-Interfaces fuer Datei- und Ordner-APIs.

Dieses Package enthaelt keine File-System-Logik. Es beschreibt nur die Contracts, die z.B. `@frxnklyn/file-manager` implementieren kann.

## Interfaces

- `FileInterface<TContent>`
- `DirectoryInterface`
- `TypedDirectoryInterface`
- `JsonDirectoryInterface`
- `HtmlDirectoryInterface`
- `TextDirectoryInterface`
- `TableDirectoryInterface`
- `CodeDirectoryInterface`
- `JsonFileInterface`
- `TextFileInterface`
- `TableFileInterface`
- `CodeFileInterface`
- `HtmlFileInterface`
- `GitignoreFileInterface`
- `GitmodulesFileInterface`

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

Die spezifischen Directory-Interfaces kapseln die typisierten Helfer pro Dateibereich.

### JsonDirectoryInterface

- `getJson(fileName)`
- `deleteJson(fileName)`
- `getJsonFiles()`

Diese Funktionen geben `JsonFileInterface` bzw. `JsonFileInterface[]` zurueck.

### HtmlDirectoryInterface

- `getHtml(fileName)`
- `deleteHtml(fileName, fileType)`
- `getHtmlFiles()`

Diese Funktionen geben `HtmlFileInterface` bzw. `HtmlFileInterface[]` zurueck.

### TextDirectoryInterface

- `getTextFiles()`
- `deleteTextFile(fileName)`
- `deleteTxt(fileName)`

Diese Funktionen geben `TextFileInterface[]` bzw. `boolean` zurueck.

### TableDirectoryInterface

- `getCsvFiles()`
- `deleteCsv(fileName)`
- `deleteCSV(fileName)`

Diese Funktionen geben `TableFileInterface[]` bzw. `boolean` zurueck.

### CodeDirectoryInterface

- `getTypeScriptFiles()`
- `deleteTypeScript(fileName)`
- `deleteTS(fileName)`

Diese Funktionen geben `CodeFileInterface[]` bzw. `boolean` zurueck.

`TypedDirectoryInterface` erweitert `DirectoryInterface` und fasst diese spezifischen Interfaces zusammen.

## Git Directory

`GitDirectoryInterface` erweitert `TypedDirectoryInterface` um Git-Dateien:

- `getGitignore(fileName)` -> `GitignoreFileInterface`
- `deleteGitignore(fileName)` -> `boolean`
- `getGitmodules(fileName)` -> `GitmodulesFileInterface`
- `deleteGitmodules(fileName)` -> `boolean`

`GitignoreFileInterface` bietet:

- `addIgnore(input)`
- `deleteIgnore(input)`

`GitmodulesFileInterface` bietet:

- `getSubmodules()`
- `addSubmodule(submodule)`
- `deleteSubmodule(nameOrPath)`
- `getSubmodule(nameOrPath)`

## Build

```bash
npm install
npm run build
```
