const path = require('path');
const rimraf = require('rimraf');

const deleteDistFolder = () => {
  rimraf.sync(path.join(__dirname, '../dist'));
};

deleteDistFolder();
