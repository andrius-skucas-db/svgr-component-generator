const { lstatSync } = require("fs");

const isDirectory = source => lstatSync(source).isDirectory();

export default isDirectory;
