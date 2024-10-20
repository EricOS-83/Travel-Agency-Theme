import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;



// serve static files, like css , images etc
app.use(express.static("public"));

//use bodyparser as middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });