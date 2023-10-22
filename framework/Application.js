const http = require('http')
const EventEmitter = require('events');

module.exports = class Application {
    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._createServer()
        this.middlewares = []
    }
    use(middleware) {
        this.middlewares.push(middleware)
    }
    listen(port, callback) {
        this.server.listen(port, callback)
    }
    addRouter(router) {
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoints[path]
            Object.keys(endpoint).forEach((method) => {
                this.emitter.on(this._getRouteMask(path, method), (req, res) => {
                    const handler = endpoint[method]

                    handler(req, res)
                })
            })

        })
    }
    _createServer() {
        return http.createServer((req, res) => {
            let body = "";
            res.setHeader('Access-Control-Allow-Origin', '*'); // Разрешить доступ со всех доменов
            res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); // Разрешенные HTTP-методы
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Разрешенные заголовки

            req.on('data', (chunk) => {
                body += chunk;

            })

            req.on('end', () => {
                if (body) {
                    req.body = JSON.parse(body)
                }
                this.middlewares.forEach(middleware => middleware(req, res))
                const emmitted = this.emitter.emit(this._getRouteMask(req.pathname, req.method), req, res)
                if (!emmitted) {
                    res.end()
                }
            })
        })
    }

    _getRouteMask(path, method) {
        return `[${path}]:[${method}]`
    }

}