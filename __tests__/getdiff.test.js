import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/getdiff.js';
import stylish from '../__fixtures__/stylish.js';
import plain from '../__fixtures__/plain.js';
import json from '../__fixtures__/json.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const fileJson1 = getFixturePath('file1.json');
const fileJson2 = getFixturePath('file2.json');
const fileYaml1 = getFixturePath('file1.yaml');
const fileYaml2 = getFixturePath('file2.yaml');

const stylishFormat = 'stylish';
const plainFormat = 'plain';
const jsonFormat = 'json';

describe('stylish output', () => {
  test('json files', () => {
    expect(genDiff(fileJson1, fileJson2, stylishFormat)).toBe(stylish);
  });
  test('yaml files', () => {
    expect(genDiff(fileYaml1, fileYaml2, stylishFormat)).toBe(stylish);
  });
});

describe('plain output', () => {
  test('json files', () => {
    expect(genDiff(fileJson1, fileJson2, plainFormat)).toBe(plain);
  });
  test('yaml files', () => {
    expect(genDiff(fileYaml1, fileYaml2, plainFormat)).toBe(plain);
  });
});

describe('JSON output', () => {
  test('json files', () => {
    expect(genDiff(fileJson1, fileJson2, jsonFormat)).toBe(json);
  });
  test('yaml files', () => {
    expect(genDiff(fileYaml1, fileYaml2, jsonFormat)).toBe(json);
  });
});
