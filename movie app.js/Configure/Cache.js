const node = require('node-cache');
const cache = new node({stdTTL:3600});
Module.export = cache;


