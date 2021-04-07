const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let postSchema = new Schema({
  title: {
    type: String,
    requred: true,
  },
  body: {
    type: String,
    required: true,
  },
});

let Post = mongoose.model("Post", postSchema);
module.exports = Post;
