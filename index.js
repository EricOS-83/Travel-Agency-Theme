import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Set the view engine to ejs
app.set("view engine", "ejs");

// Serve static files, like CSS, images, etc.
app.use(express.static("public"));

// Use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: true }));

let tourList = [];

// Serve the index.ejs when the user accesses the homepage
app.get("/", (req, res) => {
  res.render("index.ejs", { tourList: tourList }); // Render index.ejs with tours
});

app.get("/newTour", (req, res) => {
  res.render("newTour.ejs");
});

app.post("/newTour", (req, res) => {
  console.log("Request Body:", req.body); // Log the entire request body

  const TourTitle = req.body.title;
  const TourAuthor = req.body.author;
  const TourContent = req.body.content;

  // Add the new tour to the tour list
  tourList.push({
    title: TourTitle,
    author: TourAuthor,
    content: TourContent,
  });

  console.log(tourList);

  // After adding the new post, redirect back to the main page
  res.redirect("/");
});

// Serve the login page when the user accesses /login
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

// Serve the signup page when the user accesses /signup
app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

// Handle sign-up form submission
app.post("/signup", (req, res) => {
  // Process sign-up form data here (e.g., save user details)
  console.log("Signup Data:", req.body); // Log signup data for debugging

  // Redirect to the login page after successful signup
  res.redirect("/login");
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
