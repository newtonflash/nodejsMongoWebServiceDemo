const vendorSerivice  = require('./vendors.service');
const async = require('async');

const addNewVendor = function(newVendor, done) {
    vendorSerivice.addNewVendor(newVendor, done);
};

const getVendors = function(done){
    vendorSerivice.getVendors(done);
};

module.exports = {
    addNewVendor,
    getVendors
};