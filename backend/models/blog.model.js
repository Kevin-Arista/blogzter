const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: { type: String, require: true, maxLength: 70, default: "MISSING TITLE" },
    author: { type: String, require: true, default: "UNKNOWN" },
    content: { type: String, require: true, default: "..." }
}/**,{
    timestamps:{
        creayedAt: "createdOn",
        updatedAt: "updatedOn",
    }
}*/)

// compile our schemas into models, then export
const BlogModel = mongoose.model("BlogModel", BlogSchema);
module.exports = BlogModel;
// or:
// module.exports = mongoose.model("nameOfModel4Schema", Schema);