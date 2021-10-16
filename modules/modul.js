const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  // _id: {
  //   type: Number,
  //   alias: "id",
  //   required: true,
  // },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "wmail is already present."],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
});

module.exports = mongoose.model("information", userSchema);
