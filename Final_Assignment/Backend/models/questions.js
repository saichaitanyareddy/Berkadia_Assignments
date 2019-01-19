const bookshelf=require('../config/bookshelf');
var questions = bookshelf.Model.extend({
    tableName: 'questions',
});
module.exports=questions;