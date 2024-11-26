const http = require('http');
const fs = require('fs');
const { escape } = require('querystring');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line consistent-return
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        return reject();
      }
      const datarows = data.split('\n');
      const arr = {};
      let count = 0;
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
      let stdstr = `Number of students: ${count}\n`;
      // eslint-disable-next-line guard-for-in
      for (const key in arr) {
        stdstr += `Number of students in ${key}: ${arr[key].length}. List: ${arr[key].join(', ')}\n`;
      }
      resolve(stdstr.slice(0, -1));
    });
  }).catch(() => {
    throw new Error('Cannot load the database');
  });
}
// eslint-disable-next-line consistent-return
const app = http.createServer((req, res) => {
  const pathname = req.url;
  if (pathname === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (pathname === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.setHeader('Content-Type', 'text/plain');
        escape.write('This is the list of our students\n');
        res.write(data);
        res.end();
      })
      .catch((error) => {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.write(`This is the list of our students\n'${error.message}`);
        res.end();
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Not found');
    res.end();
  }
});
app.listen(1245);
module.exports = app;
