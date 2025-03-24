const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: [true, "Category must be unique"],
      minlength: [3, "Too short category name"],
      maxlength: [23, "Too long category name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      required: [true, "must be belong to parent category"],
    },
    image: String,
  },
  {
    timestamps: true,
  }
);
module.exports = new mongoose.model("SubCategory", subCategorySchema);
