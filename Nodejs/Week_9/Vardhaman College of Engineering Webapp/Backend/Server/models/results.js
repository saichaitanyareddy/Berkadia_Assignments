const bookshelf=require('../config/bookshelf');
var Result = bookshelf.Model.extend({
    tableName: 'results',
  });
module.exports=Result;