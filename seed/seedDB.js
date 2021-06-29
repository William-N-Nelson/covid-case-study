const fs = require("fs")
const db = require("./models");
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/covidcasestudy"

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const parse = require('csv-parse')

fs.readFile("./OR-Franchise Taxpayers Jan 2020 Zip 78205-RunDate03-29-2021.csv", function (err, fileData) {
    parse(fileData, {columns: false, trim: true}, function(err, rows) {
      for (let i = 0; i < rows.length; i++) {
        new db.FranchiseTaxpayers ({
        taxpayerId : rows[i][0],
        entityName : rows[i][1],
        mailingAddress : rows[i][2],
        city : rows[i][3],
        state : rows[i][4],
        zipCode : rows[i][5],
        rtbStatus : rows[i][6],
        stateOfFormation : rows[i][7],
        effRegDateSOS : rows[i][8],
        sosFileNo : rows[i][9],
        registeredAgentName : rows[i][10],
        registeredOfficeAddress : rows[i][11],
        regCity : rows[i][12],
        regSt : rows[i][13],
        regZip : rows[i][14]
        })
        .save()
      }
      console.log("For-loop complete!")
    })
  })