export function sum(numA, numB) {
  return numA + numB;
}

export function sumOddValue(values = []) {
  if (values.length === 0) return 0;
  return values.filter((value) => value % 2 !== 0).reduce((currVal, val) => currVal + val, 0);
} 