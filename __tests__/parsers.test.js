import path from 'path';
import {
  getExtension, parseData,
} from '../src/parser.js';

const jsonFile = path.resolve('.', '__fixtures__', 'file1.json');
const yamlFile = path.resolve('.', '__fixtures__', 'file1.yaml');

describe('parse file', () => {
  test('get extension of json-file', () => {
    expect(getExtension(jsonFile)).toBe('.json');
  });

  test('get extension of yaml-file', () => {
    expect(getExtension(yamlFile)).toBe('.yaml');
  });

  const result = {
    host: "hexlet.io",
    timeout: 50,
    proxy: "123.234.53.22",
    follow: false,
  };

  test('parse json-file', () => {
    expect(parseData(jsonFile)).toEqual(result);
  });

  test('parse yaml-file', () => {
    expect(parseData(yamlFile)).toEqual(result);
  });
});
