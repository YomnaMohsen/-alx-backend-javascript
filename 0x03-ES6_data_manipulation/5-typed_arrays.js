export default function createInt8TypedArray(length, position, value) {
  const myArr = new ArrayBuffer(length);
  if (position > length - 1) throw new Error('Position outside range');
  const view = new DataView(myArr, 0);
  view.setInt8(position, value);
  return view;
}
