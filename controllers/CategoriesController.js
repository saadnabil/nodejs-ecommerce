const Category = require('../models/Category')
const asyncHandler = require('express-async-handler')
const ApiError = require('../utils/ApiError');
var slugify = require('slugify')


exports.store = asyncHandler(async(req,res)=>{
    const data = req.body;
    const category = await Category.create({
        name: data.name,
        slug: slugify(data.name)
    });
    res.status(201).send(category)
});

exports.index =  asyncHandler(async(req,res) => {
    page = req.query.page * 1 || 1
    limit = req.query.limit * 1 || 5
    skip = (page - 1)*limit

    const categories = await Category.find({}).skip(skip).limit(limit);
    res.json({results: categories.length, page , data: categories});
});

exports.show = asyncHandler(async(req,res,next) => {
    const id = req.params.id
    const category = await Category.findById(id);
    if(!category){
       return next(new ApiError('category is not found!', 404));
    }
    res.json(category)
});


exports.update =  asyncHandler(async(req,res,next) => {
    const id = req.params.id
    data = req.body
   
    category = await Category.findByIdAndUpdate(
        {_id: id},
        data,
        {new: true}
    )

    if(!category){
        return next(new ApiError('category is not found!', 404));
    }

    res.json(category)
}); 


exports.destroy =  asyncHandler(async(req,res,next) => {
    const id = req.params.id
    data = req.body

    if(!category){
        return next(new ApiError('category is not found!', 404));
    }
    
    category = await Category.findByIdAndDelete(
        {_id: id},
    );
   

    res.json()
}); 