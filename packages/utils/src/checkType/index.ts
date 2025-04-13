const checkType = (value: any, type: string): boolean => {
  return Object.prototype.toString.call(value) === `[object ${type}]`;
};

export default checkType;
