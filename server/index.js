const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

const env = {
  port: 3000
}
server.use(middlewares)
server.use(jsonServer.bodyParser)

const jwt = require('jsonwebtoken');

server.post('/login', (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    res.send(400, 'Username and Password required')
  }

  const user = router.db.get('users')
    .find({
      username: req.body.username
    }).value();

  if (!user) {
    res.send(403, 'Username or password invalid')
  }


  const token = jwt.sign(user, 'secret cat');

  res.jsonp({
    token,	  
    user,
    roles: user.roles
  })
})

server.use((req, res, next) => {
  if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
    const token = (req.get('Authorization') || '').replace('Bearer ', '');
    const user = jwt.decode(token);

    if (!user) {
      res.send(401, 'Invalid Token - Only accepting Authorization: Bearer {valid_token}');
    } else if (!req.body.userId) {
      req.body.userId = user.id;
      next();
    } 
	 
    if (req.body.userId !== user.id) {
      res.send(403, 'Access denied. User can only edit own resources');
    }
  
  } else {
    next();
  }
})

// AutoAdd createdAt field
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  next()
})

server.use(router)
server.listen(env.port, () => {
  console.log('JSON Server is running on http://localhost:' + env.port + '/')
})
