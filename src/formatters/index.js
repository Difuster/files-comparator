import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatData = (data, formatType) => {
  let result;
  if (formatType === 'stylish') {
    result = stylish(data);
    return result;
  }
  if (formatType === 'plain') {
    result = plain(data);
    return result;
  }
  if (formatType === 'json') {
    result = json(data);
    return result;
  }
  result = `This format is not supported`;
  return result;
};

export default formatData;
