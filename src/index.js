// @flow
import isConfigValid from "./utils/isConfigValid";
import getDirectories from "./utils/getDirectories";
import createReactComponent from "./utils/createReactComopnent";

const createReactComponents = (config: Object = {}) => {
  try {
    isConfigValid(config);
  } catch (e) {
    console.error(e.name, e.message);
    return;
  }

  const { source } = config;

  const directories = getDirectories(source);

  if (!directories) {
    console.error("No directories found in source.");
    return;
  }

  directories.forEach(singleDirectory =>
    createReactComponent(singleDirectory, config)
  );
};

export default createReactComponents;
