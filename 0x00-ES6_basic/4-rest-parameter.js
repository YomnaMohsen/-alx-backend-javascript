export default function returnHowManyArguments(...theargs) {
  let counter = 0;
  for (const arg of theargs) {
    counter += 1;
  }
  return counter;
}
