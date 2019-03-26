const filterOutHiddenFiles = fileName => {
  return fileName.indexOf(".") !== 0;
};

export default filterOutHiddenFiles;
