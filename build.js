require('shelljs/global');

const path = require('path');

const getDistPath = function(file) {
  return path.join(__dirname, `dist/${file}`)
}

rm('-rf', getDistPath('css'));
rm('-rf', getDistPath('js'));
rm('-rf', getDistPath('pages'));