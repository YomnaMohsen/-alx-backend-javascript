const fs = require('fs');

function countStudents(path) {
  let rfile;
  const arr = {};
  let count = 0;
  try {
    rfile = fs.readFileSync(path, 'utf-8').split('\n');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const nameind = rfile[0].split(',').indexOf('firstname');
  const fieldind = rfile[0].split(',').indexOf('field');
  for (let i = 1; i < rfile.length; i += 1) {
    // eslint-disable-next-line no-continue
    if (!rfile[i] === '') continue;
    const record = rfile[i].split(',');
    count += 1;

    if (arr[record[fieldind]]) {
      arr[record[fieldind]].push(record[nameind]);
    } else {
      arr[record[fieldind]] = [record[nameind]];
    }
  }
  console.log(`Number of students: ${count}`);
  // eslint-disable-next-line guard-for-in
  for (const key in arr) {
    console.log(`Number of students in ${key}: ${arr[key].length}. List: ${arr[key].join(', ')} `);
  }
}
module.exports = countStudents;
