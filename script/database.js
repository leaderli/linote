const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const path = require('path')

//const db_init = require('../resource/db_init');
const db_init = require(path.resolve('resource/db.json'));


const db_file = new FileSync(path.resolve('resource/db.json'))

const db = low(db_file);
db.defaults(db_init).write();

module.exports=db