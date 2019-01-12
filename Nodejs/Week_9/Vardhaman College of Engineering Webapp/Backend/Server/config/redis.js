const redis=require('redis');
var client=redis.createClient();
client.on('connect',function(){
    console.log("redis client connected");
});
client.on('error',function(err){
    console.log('something went wrong'+ err);
});
module.exports=client;