// Import the required modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Create an instance of express
const app = express();

// We use the 'body-parser' middleware which the incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Set EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
console.log("views", path.join(__dirname, "views"));

// Create a data store for our student data
debugger;
let students = [];

// The GET route for the form
app.get("/StudentForm", (req, res) => {
  // Render the form and pass in the current student data
  debugger;
  res.render("index", { students: students });
});

// The POST route for form submissions
app.post("/StudentData", (req, res) => {
  // Add the submitted student data to our data store
  debugger;
  students.push(req.body);

  // Redirect back to the form
  res.redirect("/StudentForm");
});

// Start the server on port 5000
app.listen(5000, () => {
  console.log("Server started at port 5000");
});
