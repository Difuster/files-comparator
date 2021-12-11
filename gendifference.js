import path from 'path';
import { readFileSync } from 'fs';
import _ from 'lodash';

const fileExtension = (file) => path.extname(file);

const readFile = (file) => readFileSync(path.resolve('..', '__fixtures__', file), 'utf-8');

const parseFile = (file, extension) => {
  let data;
  if (extension === '.json') {
    data = JSON.parse(file);
  }
  return data;
};

const compareData = (data1, data2) => {
  const getKeys = (data) => Object.keys(data);
  const keys1 = getKeys(data1);
  const keys2 = getKeys(data2);
  let keys = _.union(keys1, keys2).sort();
  let result = '';
  keys = keys.filter((item, index) => keys.indexOf(item) === index);
  result += `{\n`;
  for (let i = 0; i < keys.length; i += 1) {
    if (_.has(data1, keys[i]) && _.has(data2, keys[i])) {
      if (data1[keys[i]] !== data2[keys[i]]) {
        result += `  - ${keys[i]}: ${data1[keys[i]]}\n  + ${keys[i]}: ${data2[keys[i]]}\n`;
      } else if (data1[keys[i]] === data2[keys[i]]) {
        result += `    ${keys[i]}: ${data1[keys[i]]}\n`;
      }
    }
    if (_.has(data1, keys[i]) && !_.has(data2, keys[i])) {
      result += `  - ${keys[i]}: ${data1[keys[i]]}\n`;
    }
    if (!_.has(data1, keys[i]) && _.has(data2, keys[i])) {
      result += `  + ${keys[i]}: ${data2[keys[i]]}\n`;
    }
  }
  result += `}`;
  return result;
};

const genDiff = (file1, file2) => {
  const fileExt1 = fileExtension(file1);
  const fileExt2 = fileExtension(file2);
  const readedFile1 = readFile(file1);
  const readedFile2 = readFile(file2);
  const data1 = parseFile(readedFile1, fileExt1);
  const data2 = parseFile(readedFile2, fileExt2);
  return compareData(data1, data2);
};

export { genDiff, compareData };
