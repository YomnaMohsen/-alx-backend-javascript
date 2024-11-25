console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  while ((chunk) !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
