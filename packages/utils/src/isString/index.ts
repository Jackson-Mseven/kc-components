const isString = (value: string): boolean => {
  return typeof value === 'string' || (value as any) instanceof String;
};

export default isString;
