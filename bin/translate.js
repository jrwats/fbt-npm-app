/**
 * Output translations into individual dictionaries.
 */
const glob = require('glob');
const {execSync} = require('child_process');

const translations = glob.sync('translations/*.json');
for (const tFile of translations) {
  let locale = /(\w+)\.json/.exec(tFile)[1];
  execSync(
    'node ./node_modules/babel-plugin-fbt/bin/translate.js --jenkins --translations ' + tFile +
      ' > src/dict/' + locale + '.json',
  );
}
