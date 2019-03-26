import { join } from "path";
import { writeFile } from "fs";
import convertNameToComponentName from "./convertNameToComponentName";
import getFileTemplate from "../templates/getFileTemplate";

const logger = require("pino")();

const createComponentFile = (directory, directoryName, iconsInFolder) => {
  const mainComponentName = convertNameToComponentName(directoryName);

  logger.log(`-- Creating component "${mainComponentName}"`);

  const filePath = join(directory, `${mainComponentName}.js`);

  const fileContent = getFileTemplate(mainComponentName, iconsInFolder);

  writeFile(filePath, fileContent, err => {
    if (err) {
      logger.error(err);
    }

    logger.log(`-- The file ${mainComponentName} was saved!`);
  });
};

export default createComponentFile;
