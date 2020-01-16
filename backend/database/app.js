let express = require("express");
path = require("path");
mongoose = require("mongoose");
cors = require("cors");
bodyParser = require("body-parser");
dataBaseConfig = require("../database/db");

//connecting mongoDb
mongoose.Promise = global.Promise;
mongoose
  .connect(dataBaseConfig.db, {
    useNewUrlParser: true
  })
  .then(
    () => {
      console.log("Database connected sucessfully");
    },
    error => {
      console.error(error);
    }
  );

//Set up express js port
const userRoute = require("./routes/user.route");
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(cors());
app.use(express.static(path.join(__dirname, "dist/inno-app")));
app.use("/", express.static(path.join(__dirname, "dist/inno-app")));
app.use("/api", userRoute);

//Create port

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log("Connected to port" + port);
});

//error handles

app.use(function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
