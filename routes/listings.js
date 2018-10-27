const router = require('koa-router')()
const Ctrl = require('../controllers/listings')

router.prefix('/listings')

router.get('/', Ctrl.findAll)
router.get('/:id', Ctrl.find)
router.post('/', Ctrl.create)
router.post('/:id', Ctrl.update)
router.delete('/:id', Ctrl.destroy)

module.exports = router
