const express = require("express");
const mongoose = require("mongoose");
const database = "mongodb://localhost/Crud";
const app = express();
app.use(express.json());

mongoose.connect(database, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("Connected successfully...");
});

app.use("/", require("./routers/router"));

const port = 2007;
app.listen(port, () => {
  console.log(`we have connected with this port no.${port}`);
});
