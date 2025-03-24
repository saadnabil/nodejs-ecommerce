const SubCategory = require('../models/SubCategory');
const asyncHandler = require('express-async-handler')
const ApiError = require('../utils/ApiError');
var slugify = require('slugify')


exports.store = asyncHandler(async(req,res)=>{
    const {name} =  req.body;
    const category = await create({
        name,
        slug: slugify(data.name)
    });
    res.status(201).send(category)
}