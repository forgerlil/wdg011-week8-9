const fs = require('fs');

fs.readFile('test.html', 'utf8', (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});
