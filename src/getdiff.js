import parseData from './parser.js';
import getTree from './tree.js';
import formatData from './formatters/index.js';
import { getPath, getValue, getExtension } from './filereader.js';

const genDiff = (file1, file2, format = 'stylish') => {
  const filePath1 = getPath(file1);
  const filePath2 = getPath(file2);
  const fileValue1 = getValue(filePath1);
  const fileValue2 = getValue(filePath2);
  const fileExtension1 = getExtension(file1);
  const fileExtension2 = getExtension(file2);
  const data1 = parseData(fileValue1, fileExtension1);
  const data2 = parseData(fileValue2, fileExtension2);
  const data = getTree(data1, data2);
  return formatData(data, format);
};

export default genDiff;
