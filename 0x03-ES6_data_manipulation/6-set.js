export default function setFromArray(arr) {
  const myset = new Set();
  for (const a of arr) {
    myset.add(a);
  }
  return myset;
}
