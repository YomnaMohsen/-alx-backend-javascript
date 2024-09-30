export default function appendToEachArrayValue(array, appendString) {
  const nArr = [];
  for (const value of array) {
    nArr.push(appendString + value);
  }

  return nArr;
}
console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));
