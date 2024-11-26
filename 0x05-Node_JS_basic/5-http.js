const http = require('http');
const countStudents = require('./3-read_file_async-1');

const app = http.createServer((req, res) => {
  const pathname = req.url;
  if (pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (pathname === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
      // res.setHeader('Content-Type', 'text/plain');
        res.end(data);
      })
      .catch((error) => {
        res.end(`This is the list of our students\n'${error.message}`);
      });
  }
});
app.listen(1245, '127.0.0.1', () => { console.log('listening'); });
module.exports = app;
