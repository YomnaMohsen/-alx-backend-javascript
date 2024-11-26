const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line consistent-return
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) { return reject(); }
      const datarows = data.split('\n');
      const arr = {};
      let count = 0;
      // let stdstr = '';
      const nameind = datarows[0].split(',').indexOf('firstname');
      const fieldind = datarows[0].split(',').indexOf('field');
      for (let i = 1; i < datarows.length; i += 1) {
        // eslint-disable-next-line no-continue
        if (datarows[i] === '') continue;
        const record = datarows[i].split(',');
        count += 1;

        if (arr[record[fieldind]]) {
          arr[record[fieldind]].push(record[nameind]);
        } else {
          arr[record[fieldind]] = [record[nameind]];
        }
      }
      //  stdstr += `Number of students: ${count}\n`;
      console.log(`Number of students: ${count}`);
      // eslint-disable-next-line guard-for-in
      for (const key in arr) {
      // eslint-disable-next-line max-len
      //  stdstr += `Number of students in ${key}: ${arr[key].length}. List: ${arr[key].join(', ')} \n`;
        console.log(`Number of students in ${key}: ${arr[key].length}. List: ${arr[key].join(', ')}`);
      }
      resolve();
    });
  }).catch(() => {
    throw new Error('Cannot load the database');
  });
}
module.exports = countStudents;
