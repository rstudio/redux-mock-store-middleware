/* global __dirname */
const fs = require('fs');
const path = require('path');
// eslint-disable-next-line no-sync
const babelrcs = JSON.parse(fs.readFileSync(path.join(__dirname, '.babelrc')));
// use the legacy-node environment
const babelrc = babelrcs.env['legacy'];
// register babel on all test files
require('babel-register')(babelrc);
