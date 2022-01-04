import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/getdiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const fileJson1 = getFixturePath('file1.json');
const fileJson2 = getFixturePath('file2.json');
const fileYaml1 = getFixturePath('file1.yaml');
const fileYaml2 = getFixturePath('file2.yaml');

const resultStylish = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
        nest: {
      - key: value
      + nest: str
        }
    }
  - group2:{
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;

const resultPlain = `Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`;

const resultJson = `[{"name":"common","type":"nested","value":[{"name":"follow","type":"added","value":false},{"name":"setting1","type":"unchanged","value":"Value 1"},{"name":"setting2","type":"removed","value":200},{"name":"setting3","type":"changed","value":[true,null]},{"name":"setting4","type":"added","value":"blah blah"},{"name":"setting5","type":"added","value":{"key5":"value5"}},{"name":"setting6","type":"nested","value":[{"name":"doge","type":"nested","value":[{"name":"wow","type":"changed","value":["","so much"]}]},{"name":"key","type":"unchanged","value":"value"},{"name":"ops","type":"added","value":"vops"}]}]},{"name":"group1","type":"nested","value":[{"name":"baz","type":"changed","value":["bas","bars"]},{"name":"foo","type":"unchanged","value":"bar"},{"name":"nest","type":"changed","value":[{"key":"value"},"str"]}]},{"name":"group2","type":"removed","value":{"abc":12345,"deep":{"id":45}}},{"name":"group3","type":"added","value":{"deep":{"id":{"number":45}},"fee":100500}}]`;

const stylishFormat = 'stylish';
const plainFormat = 'plain';
const jsonFormat = 'json';

describe('stylish output', () => {
  test('json files', () => {
    expect(genDiff(fileJson1, fileJson2, stylishFormat)).toBe(resultStylish);
  });
  test('yaml files', () => {
    expect(genDiff(fileYaml1, fileYaml2, stylishFormat)).toBe(resultStylish);
  });
});

describe('plain output', () => {
  test('json files', () => {
    expect(genDiff(fileJson1, fileJson2, plainFormat)).toBe(resultPlain);
  });
  test('yaml files', () => {
    expect(genDiff(fileYaml1, fileYaml2, plainFormat)).toBe(resultPlain);
  });
});

describe('JSON output', () => {
  test('json files', () => {
    expect(genDiff(fileJson1, fileJson2, jsonFormat)).toBe(resultJson);
  });
  test('yaml files', () => {
    expect(genDiff(fileYaml1, fileYaml2, jsonFormat)).toBe(resultJson);
  });
});
