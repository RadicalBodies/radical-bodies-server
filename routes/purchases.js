const router = require('koa-router')()
const Ctrl = require('../controllers/purchases')

router.prefix('/purchases')

router.get('/', Ctrl.findAll)
router.get('/:id', Ctrl.find)
router.post('/', Ctrl.create)
router.post('/:id', Ctrl.update)
router.delete('/:id', Ctrl.destroy)

module.exports = router
