const http = require('http')

http.createServer(function (req,res){

res.setHeader('Content-Type','text/html')
res.write('<html>')

res.write("Welcome home")
res.write( "Welcome to About Us page")
res.write( 'Welcome to my Node Js project')
res.write('</html>')
res.end()


}).listen(4000)
