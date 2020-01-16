const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let User = new Schema(
  {
    name: {
      type: String
    },
    birthday: {
      type: Date
    }
  },
  {
    collection: "users"
  }
);

module.exports = mongoose.model("User", User);
