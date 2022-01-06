import _ from 'lodash';

const getTree = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  const result = keys.map((key) => {
    const oldValue = data1[key];
    const newValue = data2[key];
    if (typeof oldValue === 'object' && typeof newValue === 'object') {
      return {
        name: key,
        type: 'nested',
        value: getTree(oldValue, newValue),
      };
    }
    if (_.has(data1, key) && _.has(data2, key)) {
      if (oldValue === newValue) {
        return {
          name: key,
          type: 'unchanged',
          value: oldValue,
        };
      }
      if (oldValue !== newValue) {
        return {
          name: key,
          type: 'changed',
          value: [oldValue, newValue],
        };
      }
    }
    if (_.has(data1, key) && !_.has(data2, key)) {
      return {
        name: key,
        type: 'removed',
        value: oldValue,
      };
    }
    if (!_.has(data1, key) && _.has(data2, key)) {
      return {
        name: key,
        type: 'added',
        value: newValue,
      };
    }
    return null;
  });
  return result;
};

export default getTree;
