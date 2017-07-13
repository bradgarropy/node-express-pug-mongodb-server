const mongoose = require("mongoose");


// define schema
var weightSchema = mongoose.Schema({
    date:   Date,
    weight: Number
});


// create model
var Weight = mongoose.model("Weight", weightSchema);


function createWeight(weight, callback) {

    Weight.create(weight, callback);
}


function readWeight(callback) {

    Weight.find(callback);
}


function updateWeight(date, weight, callback) {

    let query   = {date: date};
    let update  = {weight: weight};
    let options = {new: true};

    Weight.findOneAndUpdate(query, update, options, callback);
}


function destroyWeight(date, callback) {

    let query = {date: date};

    Weight.findOneAndRemove(query, callback);
}


// exports
exports.createWeight  = createWeight;
exports.readWeight    = readWeight;
exports.updateWeight  = updateWeight;
exports.destroyWeight = destroyWeight;
