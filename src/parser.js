import yaml from 'js-yaml';
import path from 'path';
import { readFileSync } from 'fs';

const getPath = (file) => path.resolve('..', '__fixtures__', file);
const getValue = (file) => readFileSync(file, 'utf-8');
const getExtension = (file) => path.extname(file).slice(1);

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
