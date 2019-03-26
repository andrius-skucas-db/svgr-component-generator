// @flow
import isConfigValid from "./utils/isConfigValid";
import getDirectories from "./utils/getDirectories";
import createReactComponent from "./utils/createReactComopnent";

const logger = require("pino")();

const createReactComponents = (config: Object = {}) => {
  try {
    isConfigValid(config);
  } catch (e) {
    logger.error(e);
    return;
  }

  const { source } = config;

  const directories = getDirectories(source);

  if (!directories) {
    logger.error("No directories found in source.");
    return;
  }

  directories.forEach(singleDirectory =>
    createReactComponent(singleDirectory, config)
  );
};

export default createReactComponents;
