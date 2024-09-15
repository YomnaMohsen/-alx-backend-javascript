const fs = require('fs');

function readDatabase(path){
    return new Promise((resolve, reject) => {
        // eslint-disable-next-line consistent-return
        fs.readFile(path, 'utf-8', (err, data) => {
          if (err) return reject();
          const datarows = data.split('\n');
          const arr = {};
          const nameind = datarows[0].split(',').indexOf('firstname');
          const fieldind = datarows[0].split(',').indexOf('field');
          for (let i = 1; i < datarows.length; i += 1) {
            // eslint-disable-next-line no-continue
            if (!datarows[i] === '') continue;
            const record = datarows[i].split(',');
    
            if (arr[record[fieldind]]) {
              arr[record[fieldind]].push(record[nameind]);
            } else {
              arr[record[fieldind]] = [record[nameind]];
            }
          }
          
          resolve(arr);
        });
      }).catch(() => {
        throw new Error('Cannot load the database');
      });
}
module.exports = readDatabase;
