const express = require("express");
const Weight  = require("../models/weight");

const router = express.Router();


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
            response.render("index", {weights: weights});
        }
    });
});


module.exports = router;
