const bookshelf=require('../config/bookshelf');
var branch = bookshelf.Model.extend({
    tableName: 'branch',
});
module.exports=branch;