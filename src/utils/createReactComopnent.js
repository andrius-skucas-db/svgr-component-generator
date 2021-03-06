import getFilesAndDirectoriesInPath from "./getFilesAndRirectoriesInPath";
import createComponentFile from "./createComponentFile";

const createReactComponent = (directory, config, depth = 0) => {
  const { filesInDir, dirsInDir } = getFilesAndDirectoriesInPath(directory);

  console.info(
    `- Found ${filesInDir.length} SVG files in folder "${directory.name}".`
  );
  if (filesInDir.length) {
    const distDirectory = config.dist || directory.path;
    createComponentFile(
      distDirectory,
      directory.name,
      filesInDir,
      config.fileType
    );
  }

  console.info(
    `- Found ${dirsInDir.length} directories in folder "${directory.name}".`
  );
  if (depth < config.maxDirectoryDepth) {
    dirsInDir.forEach(singleDirectory =>
      createReactComponent(singleDirectory, config, depth + 1)
    );
  }
  console.log("---------------------------------------");
};

export default createReactComponent;
