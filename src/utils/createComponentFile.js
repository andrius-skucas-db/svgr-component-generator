import { join } from "path";
import { writeFile } from "fs";
import convertNameToComponentName from "./convertNameToComponentName";
import getFileTemplate from "../templates/getFileTemplate";

const createComponentFile = (directory, directoryName, iconsInFolder) => {
  const mainComponentName = convertNameToComponentName(directoryName);

  console.log(`-- Creating component "${mainComponentName}"`);

  const filePath = join(directory, `${mainComponentName}.js`);

  const fileContent = getFileTemplate(mainComponentName, iconsInFolder);

  writeFile(filePath, fileContent, err => {
    if (err) {
      console.error(err);
    }

    console.log(`-- The file ${mainComponentName} was saved!`);
  });
};

export default createComponentFile;
