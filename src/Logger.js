// var fs = require('fs');
// var Log = require('log')
//     , Logger = new Log('debug', fs.createWriteStream('log/my.log'));
import * as fs from 'fs';
import * as Log from 'log';
var Logger = new Log('debug', fs.createWriteStream('log/my.log'));

export default Logger;