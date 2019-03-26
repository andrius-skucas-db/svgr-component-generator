function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const removeExtension = filename =>
  filename
    .split(".")
    .slice(0, -1)
    .join(".");

const convertNameToComponentName = fileName => {
  const fileWithoutExtension = fileName.includes(".")
    ? removeExtension(fileName)
    : fileName;
  const stringWithoutSpaces = fileWithoutExtension.replace(
    new RegExp(" ", "g"),
    "-"
  );
  const partials = stringWithoutSpaces.split("-");
  const capPartials = partials.map(capitalizeFirstLetter);

  return capPartials.join("");
};

export default convertNameToComponentName;
