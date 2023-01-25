const mongoose = require("mongoose");
require("dotenv").config();

const r = mongoose.connect(process.env.MONGO_URL);

module.exports = { r };
