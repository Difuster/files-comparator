const getDataFromObject = (obj) => {
  const keysValues = Object.entries(obj);
  const result = keysValues.map(([key, value]) => {
    if (typeof value === 'object') {
      return getDataFromObject(value);
    }
    return `${key}: ${value}\n`;
  });
  return result;
};

const readItem = (obj) => {
  if (obj.type === 'changed') {
    if (typeof obj.removedValue === 'object') {
      return `  - ${obj.name}:\n ${getDataFromObject(obj.removedValue)}`;
    }
    return `  - ${obj.name}: ${obj.removedValue}\n    + ${obj.name}: ${obj.addedValue}\n`;
  }
  if (obj.type === 'added' && !Array.isArray(obj.value)) {
    return obj.value === 'object' ? `  + ${obj.name}: {\n    ${getDataFromObject(obj.value)}\n  }` : `  + ${obj.name}: ${obj.value}\n`;
  }
  if (obj.type === 'removed' && !Array.isArray(obj.value)) {
    return `  - ${obj.name}: ${obj.value}\n`;
  }
  return `  + ${obj.name}: ${obj.value}\n`;
};

const printResult = (data) => {
  const result = data.reduce((acc, item) => {
    if (item.type === 'nested') {
      return `${acc}  ${item.name}: {\n    ${printResult(item.value)}\n  }`;
    }
    if (typeof item.value === 'object') {
      return `${acc}  ${item.name}: {\n    ${getDataFromObject(item.value)}  }`;
    }
    return `${acc}  ${readItem(item)}`;
  }, '');
  return `{\n${result}\n}`;
};

export default printResult;
