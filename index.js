const express = require("express");
const app = express();
app.use(express.json());
const { connection } = require("./Config/db");
const { commediRouter } = require("./Routes/commedi.route");
// const { loginRouter } = require("./Routes/login.route");
// const { signupRouter } = require("./Routes/signup.route");
const { clitterRouter } = require("./Routes/clitters.route");

require("dotenv").config();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", async (req, res) => {
  res.send("homepage");
});
app.get("/about", (req, res) => {
  res.send("This data is all about headphoneZone");
});

app.listen(process.env.port, async () => {
  try {
    await connection;

    console.log("connected to db");
    console.log("listening on port 7002");
  } catch (err) {
    console.log("error while connectoing to db");
    console.log(err);
  }
});

// ALL ROUTES

app.use("/comedy", commediRouter);
// app.use("/login", loginRouter);
// app.use("/signup", signupRouter);
app.use("/clitter", clitterRouter);
