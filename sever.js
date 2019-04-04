const  express = require('express');
const web = express();

web.listen(2198,function(err){
    if(err)console.log(err)
    else console.log("sever start");
})


web.get('/',function(require,response){
    response.sendFile(__dirname+"/index.html");
});

web.get ('/web13', function(require,response) {
    response.sendFile(__dirname+"/data/web13.json");
    
})
web.get('/web14', function(require,response) {
    response.sendFile(__dirname+"/data/web14.json");
})

web.get('/web15', function(require,response) {
    response.sendFile(__dirname+"/data/web15.json");
})

web.get('/web16', function(require,response) {
    response.sendFile(__dirname+"/data/web16.json");
})

web.get('/web17', function(require,response) {
    response.sendFile(__dirname+"/data/web17.json");
})

web.get('/web18', function(require,response) {
    response.sendFile(__dirname+"/data/web18.json");
})

web.get('/web19', function(require,response) {
    response.sendFile(__dirname+"/data/web19.json");
})

web.get('/web20', function(require,response) {
    response.sendFile(__dirname+"/data/web20.json");
})


