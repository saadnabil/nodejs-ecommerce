const express = require('express')

const {store,index,show,update,destroy} = require ('../controllers/CategoriesController')



const router = express.Router()
const { GetCategoryValidator,CreateCategoryValidator,UpdateCategoryValidator,DestroyCategoryValidator } = require('../utils/validators/CategoryValidator');


router.get('/', index)
router.post('/store',CreateCategoryValidator, store)
router.get('/:id', GetCategoryValidator , show)
router.put('/:id', UpdateCategoryValidator , update)
router.delete('/:id', DestroyCategoryValidator, destroy)


 
module.exports = router;
    