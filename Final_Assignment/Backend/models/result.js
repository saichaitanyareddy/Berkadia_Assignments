const bookshelf=require('../config/bookshelf');
var result = bookshelf.Model.extend({
    tableName: 'result',
});
module.exports=result;