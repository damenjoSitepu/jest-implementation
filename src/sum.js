export function sum(numA, numB) {
  return numA + numB;
}

export function sumOddValue(values = []) {
  if (values.length === 0) return 0;
  return values.filter((value) => value % 2 !== 0).reduce((currVal, val) => currVal + val, 0);
} 

export function sumNumberLessThanN(numbers = [], lessThanCriteria = 0, callback) {
  if (numbers.length === 0 || lessThanCriteria === 0) return 0;
  let counter = 0; 
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= lessThanCriteria) continue;
    counter += numbers[i];
  };
  callback(counter);
}

export function sumNumberLessThanNV2(numbers = [], lessThanCriteria = 0, callback) {
  if (numbers.length === 0 || lessThanCriteria === 0) return 0;
  let counter = 0; 
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= lessThanCriteria) continue;
    counter += numbers[i];
  };
  return callback(counter);
}