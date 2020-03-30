import server from './App'

server.listen(process.env.PORT||3000, () => console.log('server running on port 3000'))
