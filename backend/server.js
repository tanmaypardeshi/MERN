const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

let app = express();

app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));

const MONGO_URI = "mongodb://localhost:27017/mern";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(console.log);

app.use(cors());
app.use("/api", require("./api/routes/basicRoutes"));

const server = http.createServer(app);

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server running at port ${8000}`);
});
