const express=require('express');
const app=express();
var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['html','txt'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
  }

  app.use(express.static('public', options));
  app.get('/',(req,res)=>{
      res.send("This server will serves users with static pages");
  })
  app.listen("4000",()=>{console.log("static server is listening on port no:4000");});