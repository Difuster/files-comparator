import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatData = (data, formatType) => {
  if (formatType === 'plain') {
    return plain(data);
  }
  if (formatType === 'json') {
    return json(data);
  }
  if (formatType === 'stylish') {
    return stylish(data);
  }

  return new Error('Unknown output format');
};

export default formatData;
