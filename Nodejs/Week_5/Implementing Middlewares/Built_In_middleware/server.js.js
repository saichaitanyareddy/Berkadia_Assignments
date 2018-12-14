const express=require('express');
const app=express();
var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
}
  
app.use(express.static('public', options));


app.listen("3000",(req,res)=>{console.log("application is running on port:3000");});