export const parseArguments = (args: string[]): number[] => {
  const argsToParse = args.slice(2);
  const parsedArgs = argsToParse.map((value) => {
    if (!isNaN(Number(value))) {
      return Number(value);
    }
    throw new Error('Arguments must be numbers');
  });
  return parsedArgs;
};
