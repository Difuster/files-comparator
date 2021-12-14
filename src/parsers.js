import yaml from 'js-yaml';
import path from 'path';
import { readFileSync } from 'fs';

const getPath = (file) => path.resolve('..', '__fixtures__', file);
const getValue = (file) => readFileSync(file, 'utf-8');
const getExtension = (file) => path.extname(file);

const parseData = (file) => {
  const filePath = getPath(file);
  const fileValue = getValue(filePath);
  const fileExtension = getExtension(file);
  const data = fileExtension === '.json' ? JSON.parse(fileValue) : yaml.load(fileValue);
  return data;
};

export {
  parseData, getPath, getExtension,
};
