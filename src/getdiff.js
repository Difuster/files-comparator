import { parseData } from './parsers.js';
import compareData from './comparator.js';
import printResult from './stylish.js';

const genDiff = (file1, file2) => {
  const data1 = parseData(file1);
  const data2 = parseData(file2);
  const data = compareData(data1, data2);
  console.dir(data, { depth: 10 });
  return printResult(data);
};

export default genDiff;
