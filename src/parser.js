import yaml from 'js-yaml';
import { getPath, getValue, getExtension } from './getpath.js';

const parseData = (file) => {
  const filePath = getPath(file);
  const fileValue = getValue(filePath);
  const fileExtension = getExtension(file);
  if (fileExtension === 'json') {
    return JSON.parse(fileValue);
  }
  if (fileExtension === 'yaml' || fileExtension === 'yml') {
    return yaml.load(fileValue);
  }
  return new Error('Unknown data format');
};

export {
  parseData, getPath, getExtension,
};
