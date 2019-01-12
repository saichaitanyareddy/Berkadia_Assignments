const bookshelf=require('../config/bookshelf');
const branch=require('./branch');
var students = bookshelf.Model.extend({
    tableName: 'studentsdetails',
    fk: function() {
        return this.belongsTo(branch, 'bid', 'bid');
    }
});
module.exports=students;