const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.NODE_ENV === 'production' ? '127.0.0.1' : 'localhost'
const port = parseInt(process.env.PORT || '3000', 10)

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Handle health check endpoint for cPanel
      if (req.url === '/health' || req.url === '/_health') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('ok')
        return
      }

      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('Internal Server Error')
    }
  })
  .once('error', (err) => {
    console.error('Server error:', err)
    process.exit(1)
  })
  .listen(port, hostname, () => {
    console.log(`> Next.js server listening on http://${hostname}:${port}`)
    console.log(`> Environment: ${dev ? 'development' : 'production'}`)
  })
})