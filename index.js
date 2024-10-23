import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');


// Serve static files, like CSS, images, etc.
app.use(express.static("public"));

// Use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the index.ejs when the user accesses the homepage
app.get('/', (req, res) => {
    res.render('index.ejs');  // Render index.ejs (you need to create this file in the views folder)
});

app.get('/login', (req, res) => {
    res.render('login.ejs');  // Render login.ejs (you need to create this file in the views folder)
});


// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
