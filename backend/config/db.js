// const r = mongoose.connect(process.env.MONGO_URL);

// module.exports = { r };

// import mongoose from 'mongoose';

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URL, {
//       //must add in order to not get any error masseges:
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     });
//     console.log(`mongo database is connected!!! ${conn.connection.host} `);
//   } catch (error) {
//     console.error(`Error=>: ${error} `);
//     process.exit(1); //passing 1 - will exit the proccess with error
//   }
// };

// export default connectDB;
// module.exports = { connectDB };

const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);
const connectDB = mongoose.connect(process.env.MONGO_URL);

module.exports = { connectDB };
