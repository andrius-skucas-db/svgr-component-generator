#!/usr/bin/env node

const minimist = require("minimist");
const generateComponents = require("../lib/index.js").default;

const args = minimist(process.argv.slice(2));

const config = {
  source: args.source || "./",
  dist: args.dist,
  fileType: args.fileType || "js"
};

generateComponents(config);
