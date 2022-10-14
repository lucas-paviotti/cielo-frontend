export const getDeviation = (currentValue, previousValue) => {
  return ((currentValue - previousValue) / previousValue) * 100;
};
