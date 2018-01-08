const Vendor = require('./vendors.entity');

const addNewVendor = function(newVendor, done){
    var vendor = new Vendor();
    vendor.name = newVendor.name;
    vendor.vendorCode = newVendor.vendorCode;
    vendor.contactEmail = newVendor.contactEmail;
    vendor.sellerRank = newVendor.sellerRank;

    vendor.save(function(err, savedDoc){
        if (err) {
            console.error("Error in adding new vendor, ERROR::", err);
            done(err);
        } else {
            done(null, savedDoc);
        }
    })
};

const getVendors = function(done){
    let query = {};
    let fieldOptions = null;
    let page = 1;
    let limit = 10;

    Vendor.find(query)
        .select(fieldOptions)
        .skip((page > 0) ? limit * (page - 1) : 0)
        .limit(limit)
        .exec((err, collection) => {
            if(err){
                console.error('Error in finding products, ERROR::', err, ' queries for ', query);
                done(err);
                return;
            }
            done(null, collection);
        });
};

//noinspection JSUnresolvedVariable
module.exports = {
    addNewVendor,
    getVendors
};