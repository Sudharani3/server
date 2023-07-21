var http=require('http');
var imp=require('./second_Module');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
res.write(imp.myfun());
res.end;
}).listen(6006);


