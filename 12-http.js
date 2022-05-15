
const http=require('http')

const server=http.createServer((req,res)=>{

    res.write('this is the first server')
    res.end()


})

server.listen(8999)