import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatData = (data, formatType = 'stylish') => {
  if (formatType === 'stylish') {
    return stylish(data);
  }
  if (formatType === 'plain') {
    return plain(data);
  }
  if (formatType === 'json') {
    return json(data);
  }
  return new Error('Unknown format type');
};

export default formatData;
