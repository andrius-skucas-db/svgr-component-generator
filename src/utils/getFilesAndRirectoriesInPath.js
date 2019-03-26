import { readdirSync } from "fs";
import { join } from "path";
import filterOutHiddenFiles from "./filterOutHiddenFiles";
import isDirectory from "./isDirectory";
import convertNameToComponentName from "./convertNameToComponentName";

const leaveOnlySvg = file => {
  return file.name.endsWith(".svg");
};

const remapFileNames = (source, name) => {
  return {
    path: join(source, name),
    name,
    source,
    componentName: convertNameToComponentName(name)
  };
};

const getFilesAndDirectoriesInPath = directory => {
  const dirContent = readdirSync(directory.path)
    .filter(filterOutHiddenFiles)
    .map(name => remapFileNames(directory.path, name));

  const filesInDir = dirContent
    .filter(item => !isDirectory(item.path))
    .filter(leaveOnlySvg);
  const dirsInDir = dirContent.filter(item => isDirectory(item.path));

  return { filesInDir, dirsInDir };
};

export default getFilesAndDirectoriesInPath;
