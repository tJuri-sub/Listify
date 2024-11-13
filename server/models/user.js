const mongoose = require("mongoose");
const { Schema } = mongoose;

//creating the schema for users
const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//exporting the model
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
