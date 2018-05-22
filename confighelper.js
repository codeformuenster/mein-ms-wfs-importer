'use strict';

const args = require('minimist')(process.argv.slice(2));

if (!args['elasticsearch-url'] || !args['wfs-source-url']) {
  console.error('Missing arguments --elasticsearch-url or --wfs-source-url');
  process.exit(1);
}

module.exports = args
