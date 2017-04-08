/* eslint-disable */

require('shelljs/global');
const addCheckMark = require('./helpers/checkmark.js');

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}

if (!test('-e', 'internals/templates')) {
  echo('The example is deleted already.');
  exit(1);
}

process.stdout.write('Cleanup started...');

// Reuse existing LanguageProvider and internationalization tests
cp('client/app/tests/internationalization.test.js', 'internals/templates/app/tests/internationalization.test.js');

// cleanup client/
rm('-rf', 'client/*');
mv('internals/templates', 'client');

addCheckMark();

// Commit the changes
if (exec('git add . --all && git commit -qm "Remove default example"').code !== 0) {
  echo('\nError: Git commit failed');
  exit(1);
}

echo('\nCleanup done. Happy Coding!!!');
