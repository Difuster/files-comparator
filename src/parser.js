import yaml from 'js-yaml';

const parseData = (data, ext) => {
  if (ext === 'json') {
    return JSON.parse(data);
  }
  if (ext === 'yaml' || ext === 'yml') {
    return yaml.load(data);
  }
  throw new Error('Unknown file format');
};

export default parseData;
