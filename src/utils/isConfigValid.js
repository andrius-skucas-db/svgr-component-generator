function ConfigException(message) {
  this.message = message;
  this.name = "ConfigurationException";
}

const isConfigValid = config => {
  if (!config.source) {
    throw new ConfigException("You need to specify source directory");
  }
};

export default isConfigValid;
