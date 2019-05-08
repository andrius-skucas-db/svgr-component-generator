function ConfigException(message) {
  this.message = message;
  this.name = "ConfigurationException";
}

const allowedExtensions = ["js", "jsx", "ts"];

const isConfigValid = config => {
  if (!config.source) {
    throw new ConfigException("You need to specify source directory");
  }

  if (config.fileType && !allowedExtensions.includes(config.fileType)) {
    throw new ConfigException(
      `Invalid file type. File types can be: ${allowedExtensions.join(", ")}`
    );
  }
};

export default isConfigValid;
