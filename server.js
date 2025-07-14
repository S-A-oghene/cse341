const express = require("express");

const mongodb = require("./data/database");

const app = express();

const port = process.env.PORT || 3000;

// Added this root route handler to debug rendering issues
app.get("/", (req, res) => {
  res.send("Welcome to the CSE341 API!");
});

app.use("/", require("./routes"));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else
    app.listen(port, () => {
      console.log(`Database is listening and node running on port ${port}`);
    });
});
