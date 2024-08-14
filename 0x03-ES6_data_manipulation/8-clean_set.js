export default function cleanSet(myset, startstring) {
  let str = '';
  if (startstring === '') {
    return '';
  }
  for (const item of myset) {
    if (myset instanceof Set && typeof startstring === 'string') {
      if (item && item.startsWith(startstring)) {
        if (str !== '') {
          str += '-';
        }
        const strslice = item.slice(startstring.length);
        str += strslice;
      }
    }
  }
  return str;
}
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
