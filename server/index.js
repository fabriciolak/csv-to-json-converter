import http from 'node:http'

import { routes } from './routes.js'

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  const route = routes.find((route) => {
    if (route.method !== method) {
      res.writeHead(405).end('Method not allowed')
    }
    
    return route.method === method && route.path === url
  })
  
  if (route) {
    return await route.handler(req, res)
  }

  res.end()
})

server.listen(3333)
