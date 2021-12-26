import { parseData } from './parser.js';
import compareData from './comparator.js';
import formatData from './formatters/index.js';

const genDiff = (file1, file2, format) => {
  const data1 = parseData(file1);
  const data2 = parseData(file2);
  const data = compareData(data1, data2);
  return formatData(data, format);
};

export default genDiff;
