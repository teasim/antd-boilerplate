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

// Reuse existing LanguageProvider and i18n tests
mv('client/application/containers/LanguageProvider/tests', 'internals/templates/containers/LanguageProvider');
cp('client/application/tests/i18n.test.js', 'internals/templates/tests/i18n.test.js');

// Cleanup components/
rm('-rf', 'client/application/components/*');

// Handle containers/
rm('-rf', 'client/application/containers');
mv('internals/templates/application/containers', 'client');

// Handle tests/
mv('internals/templates/application/tests', 'client');

// Handle translations/
rm('-rf', 'client/application/translations')
mv('internals/templates/application/translations', 'client');

// Handle utils/
rm('-rf', 'client/application/utils');
mv('internals/templates/application/utils', 'client')

// Replace the files in the root app/ folder
cp('internals/templates/application/entries/app.js', 'client/application/entries/app.js');
cp('internals/templates/application/styles/global-styles.js', 'client/application/styles/global-styles.js');
cp('internals/templates/application/helpers/i18n.js', 'client/application/helpers/i18n.js');
cp('internals/templates/application/reducers/reducers.js', 'client/application/reducers/reducers.js');
cp('internals/templates/application/routes/routes.js', 'client/application/routes/routes.js');
cp('internals/templates/application/stores/store.js', 'client/application/stores/store.js');
cp('internals/templates/template/index.html', 'client/template/index.html');

// Remove the templates folder
rm('-rf', 'internals/templates');

addCheckMark();

// Commit the changes
if (exec('git add . --all && git commit -qm "Remove default example"').code !== 0) {
  echo('\nError: Git commit failed');
  exit(1);
}

echo('\nCleanup done. Happy Coding!!!');
