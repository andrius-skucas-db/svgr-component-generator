function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const removeExtension = filename =>
  filename
    .split(".")
    .slice(0, -1)
    .join(".");

const replaceAll = (string, replace, replaceWith) =>
  string.replace(new RegExp(replace, "g"), replaceWith);

const cleanUpString = string => {
  const charsToReplace = ["_", " "];
  const cleanString = string.replace(/[^\w\s]/gi, "-");
  return charsToReplace.reduce((accumulator, char) => {
    return replaceAll(accumulator, char, "-");
  }, cleanString);
};

const convertNameToComponentName = fileName => {
  const fileWithoutExtension = fileName.includes(".")
    ? removeExtension(fileName)
    : fileName;
  const stringWithoutSpaces = cleanUpString(fileWithoutExtension);
  const partials = stringWithoutSpaces.split("-");
  const capPartials = partials.map(capitalizeFirstLetter);

  return capPartials.join("");
};

export default convertNameToComponentName;
