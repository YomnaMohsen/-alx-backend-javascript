export default function hasValuesFromArray(myset, myarr) {
  for (const a of myarr) {
    if (!myset.has(a)) {
      return false;
    }
  }
  return true;
}
