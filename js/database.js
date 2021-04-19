var low = require('lowdb');

var db_init = require('../resource/db_init')

const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname.replace('js','resource')+'/db.json')

var db = low(adapter)
db.defaults(db_init).write();

module.exports=db