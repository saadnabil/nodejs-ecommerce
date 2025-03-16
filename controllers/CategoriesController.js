const Category = require('../models/Category')
const asyncHandler = require('express-async-handler')

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

exports.show = asyncHandler(async(req,res) => {
    const id = req.params.id
    const category = await Category.findById(id);
    if(!category){
        return res.status(404).send("no category for this id");
    }
    res.json(category)
});


exports.update =  asyncHandler(async(req,res) => {
    const id = req.params.id
    data = req.body
   
    category = await Category.findByIdAndUpdate(
        {_id: id},
        data,
        {new: true}
    )

    if(!category){
        return res.status(404).send("no category for this id");
    }

    res.json(category)
}); 


exports.destroy =  asyncHandler(async(req,res) => {
    const id = req.params.id
    data = req.body
    
    category = await Category.findByIdAndDelete(
        {_id: id},
    );
    if(!category){
        return res.status(404).send("no category for this id");
    }

    res.json()
}); 