import { compareData } from '../gendifference.js';

const file1 = {
  host: 'jino.ru',
  timeout: 70,
  proxy: '123.234.53.22',
  follow: false,
};

const file2 = {
  timeout: 80,
  verbose: true,
  host: 'hexlet.io',
};

const result = `{\n  - follow: false\n  - host: jino.ru\n  + host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 70\n  + timeout: 80\n  +   verbose: true\n}`;

test('differences are defined', () => {
  expect(compareData(file1, file2)).toBe(result);
});
