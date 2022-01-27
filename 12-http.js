const http = require('http')

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end('welcoome to home page')
    }
    else if(req.url ==='/about'){
        res.end('Here is out short history')
    }else{
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page that you're looking for</p>
        <a href="/">Back home</a>
        `)
    }

})

server.listen(5000)
