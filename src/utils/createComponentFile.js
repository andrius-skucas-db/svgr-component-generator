import { join } from "path";
import { writeFile } from "fs";
import convertNameToComponentName from "./convertNameToComponentName";
import getFileTemplate from "../templates/getFileTemplate";

const createComponentFile = (
  directory,
  directoryName,
  iconsInFolder,
  fileType
) => {
  const mainComponentName = convertNameToComponentName(directoryName);

  console.log(`-- Creating component "${mainComponentName}"`);

  const filePath = join(directory, `${mainComponentName}.${fileType}`);

  const fileContent = getFileTemplate(
    mainComponentName,
    iconsInFolder,
    fileType
  );

  writeFile(filePath, fileContent, err => {
    if (err) {
      console.error(err);
    }

    console.log(`-- The file ${mainComponentName} was saved!`);
  });
};

export default createComponentFile;
