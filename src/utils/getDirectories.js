import { readdirSync } from "fs";
import { join } from "path";
import isDirectory from "./isDirectory";

const getDirectories = source =>
  readdirSync(source)
    .map(name => ({
      path: join(source, name),
      name
    }))
    .filter(item => isDirectory(item.path));

export default getDirectories;
