export default function cleanSet(myset, startstring) {
  let str = '';
  for (const item of myset) {
    if (item.startsWith(startstring)) {
      if (str !== '') {
        str += '-';
      }
      const strslice = item.slice(startstring.length);
      str += strslice;
    }
  }
  return str;
}
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
