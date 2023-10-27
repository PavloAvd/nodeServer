const Router = require("../framework/Router")
const controller = require("../src/request-controller")

const router = new Router()
router.get('/api/request', controller.getData )
router.post('/api/request', controller.setData)
router.get('/api/product', controller.getProduct)
router.get('/api/user', controller.getUser)
router.post('/api/send-telegram', controller.sendTelegram)

module.exports = router