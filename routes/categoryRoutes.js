const express = require('express')

const {store,index,show,update,destroy} = require ('../controllers/CategoriesController')

const router = express.Router()

router.get('/', index)
router.post('/store', store)
router.get('/:id', show)
router.put('/:id', update)
router.delete('/:id', destroy)


 
module.exports = router;
    