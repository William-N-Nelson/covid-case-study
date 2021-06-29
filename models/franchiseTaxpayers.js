const mongoose = require("mongoose")
const Schema = mongoose.Schema

const franchiseTaxpayerSchema = new Schema({
taxpayerId : String,
entityName : String, 
mailingAddress : String,
city : String,
state : String,
zipCode : String,
rtbStatus : String,
stateOfFormation: String,
effRegDateSOS : String,
sosFileNo : String,
registeredAgentName : String,
registeredOfficeAddress: String,
regCity : String,
regSt : String,
regZip : String
})

const franchiseTaxpayers = mongoose.model("franchiseTaxpayers", franchiseTaxpayerSchema);

module.exports = franchiseTaxpayers;