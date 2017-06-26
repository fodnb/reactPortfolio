
// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var MessageSchema = new Schema({
  // title is a required string
  name: {
    type: String,
    text: true,
    required: true
  },
  // link is a required string
  email: {
    type: String,
    required: [true, "A valid email is required"]
 },
 message: {
    type: String,
   	required:true,
  }
});

// Create the Article model with the ArticleSchema
var Message = mongoose.model("Message", MessageSchema);

// Export the model
module.exports = Message;