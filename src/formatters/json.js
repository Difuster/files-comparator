const json = (data) => {
  const iter = (arr) => JSON.stringify(arr);
  return iter(data);
};

export default json;
