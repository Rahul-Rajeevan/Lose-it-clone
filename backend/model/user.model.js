const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, require },
  password: { type: String, require },
  email: { type: String, require },
  age: { type: String, require },
  weight: { type: String, require },
});

const userModel = mongoose.model("userCollections", userSchema);

module.exports = userModel;
