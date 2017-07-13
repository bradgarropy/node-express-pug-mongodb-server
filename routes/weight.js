const express = require("express");
const Weight  = require("../models/weight");

const router = express.Router();


router.post("/", function(request, response) {
    console.log(request.method + " " +  request.originalUrl);
    console.log(request.body);

    let weight = request.body;

    Weight.createWeight(weight, function(err, weight) {

        // check errors
        if(err) {
            console.log(err);
            throw err;
        }

        // carry on
        else {
            // send response
            response.json(weight);
        }
    });
});


router.get("/", function(request, response) {
    console.log(request.method + " " +  request.originalUrl);

    Weight.readWeight(function(err, weights) {

        // check errors
        if(err) {
            console.log(err);
            throw err;
        }

        // carry on
        else {
            // send response
            response.json(weights);
        }
    });
});


router.patch("/:date", function(request, response) {
    console.log(request.method + " " +  request.originalUrl);
    console.log(request.body);

    let date   = request.params.date;
    let weight = request.body.weight;

    Weight.updateWeight(date, weight, function(err, weight) {

        // check errors
        if(err) {
            console.log(err);
            throw err;
        }

        // carry on
        else {
            // send response
            response.json(weight);
        }
    });
});


router.delete("/:date", function(request, response) {
    console.log(request.method + " " +  request.originalUrl);

    let date = request.params.date;

    Weight.destroyWeight(date, function(err, weight) {

        // check errors
        if(err) {
            console.log(err);
            throw err;
        }

        // carry on
        else {
            // send response
            response.json(weight);
        }
    });
});


module.exports = router;
