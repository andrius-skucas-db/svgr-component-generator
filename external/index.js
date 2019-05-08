#!/usr/bin/env node

const minimist = require("minimist");
const generateComponents = require("../lib/index.js").default;

const args = minimist(process.argv.slice(2));

if (args.help) {
  console.table([
    {
      Command: "--help",
      Description: "Prints info about tool",
      Default: "---"
    },
    {
      Command: "--source",
      Description: "Sets source directory where all directories with icons are",
      Default: "./ (Current directory)"
    },
    {
      Command: "--dist",
      Description: "Sets directory where icon components should be saved",
      Default: "Same directory where icons for that component are"
    },
    {
      Command: "--fileType",
      Description: "Sets one of the following file types: js, jsx or ts",
      Default: "js"
    },
    {
      Command: "--maxDirectoryDepth",
      Description: `Sets how deep into directory tree should tool dive. 
      Prevents from recursion and infinite loop.`,
      Default: "3"
    }
  ]);
  return;
}

const config = {
  source: args.source || "./",
  dist: args.dist,
  fileType: args.fileType || "js",
  maxDirectoryDepth: args.maxDirectoryDepth
    ? Math.max(args.maxDirectoryDepth, 10)
    : 3
};

generateComponents(config);
