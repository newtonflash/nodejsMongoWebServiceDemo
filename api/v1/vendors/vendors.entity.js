const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    vendorCode : {
        type : Number,
        required: true,
        unique : true
    },
    contactEmail : {
        type : String
    },
    sellerRank : {
        type : Number,
        min : 0,
        max : 999999
    }
}, {collection : "vendors"});

schema.index({
    vendorCode: 1
}, {
    unique : true
});

module.exports = mongoose.model("vendors", schema);