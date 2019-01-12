const knex=require('./kenx');
var bookshelf = require('bookshelf')(knex);
module.exports=bookshelf;