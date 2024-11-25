/* eslint-disable no-undef */
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  // eslint-disable-next-line no-cond-assign
  while ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
