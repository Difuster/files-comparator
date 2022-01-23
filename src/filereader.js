import path from 'path';
import { readFileSync } from 'fs';

const getPath = (file) => path.resolve('..', '__fixtures__', file);
const getValue = (file) => readFileSync(file, 'utf-8');
const getExtension = (file) => path.extname(file).slice(1);

export {
  getPath, getValue, getExtension,
};
