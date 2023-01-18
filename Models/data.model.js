const mongoose = require("mongoose");

const headSChema = mongoose.Schema({
  Title: { type: String, required: true },
  Heading: { type: String, required: true },
  Reviews: { type: String, required: true },
  Brand: { type: String, required: true },
  Price: { type: String, required: true },
  Colour: { type: String, required: true },
  RegularPrice: { type: String, required: true },
  Details: { type: String, required: true },
  Poster: { type: String, required: true },
});

const HeadPhoneModel = mongoose.model("HeadPhone", headSChema);
module.exports = { HeadPhoneModel };
