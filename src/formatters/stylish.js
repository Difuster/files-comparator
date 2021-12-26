import _ from 'lodash';

const getDataFromObject = (obj, depth) => {
  const entries = Object.entries(obj);
  const result = entries.map(([key, value]) => {
    const replacer = '    ';
    const currentIndent = replacer.repeat(depth);
    if (_.isPlainObject(value)) {
      return `${currentIndent}${key}: {\n${getDataFromObject(value, depth + 1)}\n${currentIndent}}`;
    }
    return `${currentIndent}${key}: ${value}`;
  });
  return result.join('\n');
};

const stylish = (data) => {
  const iter = (arr, depth) => {
    const replacer = '    ';
    const currentIndent = replacer.repeat(depth);
    const curIndRemVal = `${replacer.repeat(depth).slice(0, -2)}- `;
    const curIndAddVal = `${replacer.repeat(depth).slice(0, -2)}+ `;
    const result = arr.map((item) => {
      if (item.type === 'nested') {
        return `${currentIndent}${item.name}: {\n${iter(item.value, depth + 1)}\n${currentIndent}}`;
      }

      if (item.type === 'changed') {
        if (_.isPlainObject(item.value[0])) {
          return `${currentIndent}${item.name}: {\n${curIndRemVal}${getDataFromObject(item.value[0])}\n${curIndAddVal}${item.name}: ${item.value[1]}\n${currentIndent}}`;
        }
        if (_.isPlainObject(item.value[1])) {
          return `${currentIndent}${item.name}: {\n${curIndAddVal}${getDataFromObject(item.value[1])}\n${curIndRemVal}${item.name}: ${item.value[0]}\n${currentIndent}}`;
        }
        return `${curIndRemVal}${item.name}: ${item.value[0]}\n${curIndAddVal}${item.name}: ${item.value[1]}`;
      }

      if (item.type === 'added') {
        if (_.isPlainObject(item.value)) {
          return `${curIndAddVal}${item.name}: {\n${getDataFromObject(item.value, depth + 1)}\n${currentIndent}}`;
        }
        return `${curIndAddVal}${item.name}: ${item.value}`;
      }

      if (item.type === 'removed') {
        if (_.isPlainObject(item.value)) {
          return `${curIndRemVal}${item.name}:{\n${getDataFromObject(item.value, depth + 1)}\n${currentIndent}}`;
        }
        return `${curIndRemVal}${item.name}: ${(item.value)}`;
      }

      return `${currentIndent}${item.name}: ${item.value}`;
    });

    return result.join('\n');
  };

  return `{\n${iter(data, 1)}\n}`;
};

export default stylish;
