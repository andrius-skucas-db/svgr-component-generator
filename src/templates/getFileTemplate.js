const generateImports = files => {
  return files.reduce((accumulator, file) => {
    return `${accumulator}
import ${file.componentName} from './${file.name}';`;
  }, ``);
};

const generateMap = files => {
  return files.reduce((accumulator, file) => {
    return `${accumulator}${accumulator ? "," : ""}
  ['${file.componentName}', ${file.componentName}]`;
  }, ``);
};

const generatePropTypes = files => {
  return files.reduce((accumulator, file) => {
    return `${accumulator}${accumulator ? "," : ""}
    '${file.componentName}'`;
  }, ``);
};

const getFileTemplate = (componentName, filesToInclude) => {
  return `
import React from 'react';
import PropTypes from 'prop-types';    
${generateImports(filesToInclude)}
    
const iconsMap = new Map([${generateMap(filesToInclude)}
]);
    
const ${componentName} = ({ icon, ...rest}) => {
  const Icon = iconsMap.get(icon);

  return Icon ? <Icon {...rest} /> : null;
};

${componentName}.propTypes = {
  icon: PropTypes.oneOf([${generatePropTypes(filesToInclude)}
  ])
};

export default ${componentName};
  `;
};

export default getFileTemplate;
