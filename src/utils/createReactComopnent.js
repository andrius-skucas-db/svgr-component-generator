import getFilesAndDirectoriesInPath from "./getFilesAndRirectoriesInPath";
import createComponentFile from "./createComponentFile";

const logger = require("pino")();

const createReactComponent = (directory, config) => {
  const { filesInDir, dirsInDir } = getFilesAndDirectoriesInPath(directory);

  logger.info(
    `- Found ${filesInDir.length} SVG files in folder "${directory.name}".`
  );
  if (filesInDir.length) {
    const distDirectory = config.dist || directory.path;
    createComponentFile(distDirectory, directory.name, filesInDir);
  }

  logger.info(
    `- Found ${dirsInDir.length} directories in folder "${directory.name}".`
  );
  dirsInDir.forEach(singleDirectory =>
    createReactComponent(singleDirectory, config)
  );
};

export default createReactComponent;
