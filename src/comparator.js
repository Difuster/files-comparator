import _ from 'lodash';

const compareData = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  const result = keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if (typeof value1 === 'object' && typeof value2 === 'object') {
      return {
        name: key,
        type: 'nested',
        value: compareData(value1, value2),
      };
    }
    if (_.has(data1, key) && _.has(data2, key)) {
      if (value1 === value2) {
        return {
          name: key,
          type: 'unchanged',
          value: value1,
        };
      }
      if (value1 !== value2) {
        return {
          name: key,
          type: 'changed',
          value: [value1, value2],
        };
      }
    }
    if (_.has(data1, key) && !_.has(data2, key)) {
      return {
        name: key,
        type: 'removed',
        value: value1,
      };
    }
    if (!_.has(data1, key) && _.has(data2, key)) {
      return {
        name: key,
        type: 'added',
        value: value2,
      };
    }
    return null;
  });
  return result;
};

export default compareData;
