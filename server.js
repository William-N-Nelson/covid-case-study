const express = require("express");
const db = require("./models")
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/covidcasestudy"

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.get("/", function(req, res){
  res.json({msg:"message from backend"})
})

// Send every request to the React app
// Define any API routes before this runs

app.get("/api/v1/records", function(req, res){
   db.FranchiseTaxpayers
   .find()
   .then(response => res.json(response))
})

//findbyid
app.get("/api/v1/records/:busi", function(req, res){
  const busi = req.params.busi
  db.FranchiseTaxpayers
  .findById(busi)
  .then(response => res.json(response));
})

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});




app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
