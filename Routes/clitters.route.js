const { Router } = require("express");
const { ClitterModel } = require("../Models/Clitters.model");
const clitterRouter = Router();

clitterRouter.get("/", async (req, res) => {
  try {
    let currentMovie = await ClitterModel.find();
    // console.log(currentMovie);
    res.send(currentMovie);
  } catch (err) {
    res.send({ msg: "something went wrong" });
    console.log(err);
  }
});

clitterRouter.post("/post", async (req, res) => {
  const payload = req.body;
  try {
    const new_data = new ClitterModel(payload);
    await new_data.save();
    res.send({ MSG: " Data Posted Successfully" });
  } catch (err) {
    console.log({ ERR: "Something went wrong in posting the Data" });
  }
});
module.exports = { clitterRouter };
