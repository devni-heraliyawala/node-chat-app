const server = require('./app')

const port = process.env.port

server.listen(port, () => {
    console.log(`Express server is up on port ${port}!`)
})