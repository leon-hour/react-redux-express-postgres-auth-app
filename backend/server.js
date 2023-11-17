const express = require("express");
const cors = require("cors");
const authenticationRoutes = require("./routes/registration");
const bodyParser2 = require("body-parser");

const expressPort = 3001;

const app = express();

// Use bodyParser2 for parsing the request body
app.use(bodyParser2.json());

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(authenticationRoutes);

app.listen(expressPort, () => {
  console.log(`Express.js server is running on port ${expressPort}`);
});
