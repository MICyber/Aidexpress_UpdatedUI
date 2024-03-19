// src/models/applicationModel.js
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const applicationSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 },
  nameOfHouseholder: { type: String },
  address: { type: String },
  nicNumber: { type: String },
  telephoneNumber: { type: String },
  age: { type: Number },
  namesOfFamilyMembers: [{ type: String }], 
  maritalStatus: { type: String},
  singleParent: { type: String },
  divisionalSecretariat: { type: String },
  gramaSevakaDivision: { type: String },
  bankName: { type: String },
  accountHolderName: { type: String },
  accountNumber: { type: String },
  branchName: { type: String },
  monthlyPerCapitaIncome: { type: String },
  numberOfLivelihoodAssets: { type: String },
  numberOfAcresOfCultivablePaddyLand: { type: String },
  numberOfResidentialHousesAndLandOwned: { type: String },
  numberOfOtherHousesOrBuildingsOwned: { type: String },
  numberOfTransportAssets: { type: String },
  totalFloorArea: { type: String },
  nonAvailabilityOfDrinkingWater: { type: String },
  absenceOfNecessarySanitaryFacilities: { type: String },
  proofOfIncome: { type: String }, // URL as a string
  taxReturns: { type: String }, // URL as a string
  bankStatements: { type: String }, // URL as a string
  proofOfAssets: { type: String }, // URL as a string
  proofOfExpenses: { type: String }, // URL as a string
  identification: { type: String }, // URL as a string
  proofOfHouseholdSize: { type: String }, // URL as a string
  otherDocumentsToSupport: { type: String }, // URL as a string
  
  status: {
    type: String,
    enum: ['submitted', 'delivered', 'checked', 'visited', 'completed','rejected'],
    default: 'submitted',
  },
  updates: [{
    status: String,
    date: {
      type: Date,
      default: Date.now,
    },
    note: String,
    user: { type: String, required: false},
  }],
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
