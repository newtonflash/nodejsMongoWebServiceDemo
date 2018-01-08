const router = require('express').Router();
const vendorCtrl = require('./vendors.controller');

/**
 * Effective URL is POST /vendors/
 *
 * This API adds a new vendor to the catalog
 */
router.post('/', function (req, res) {
    try {
        let newVendor = req.body;
        vendorCtrl.addNewVendor(newVendor, function (err, result) {
            if (err) {
                console.error('Error in adding new vendor, ERROR::', err);

                res.status(400).send({error: 'Something went wrong, please check and tray again..!'});
                return;
            }
            res.status(201).send(result);
            return;
        })
    } catch (err) {
        console.error('Unexpected error in adding new vendor, ERROR::', err);
        res.status(500).send({error: 'Unexpected internal error, please try later..!'});
        return;
    }
});

/**
 * Effective URL is GET /vendors/
 *
 * This API finds vendors(s) in the catalog
 */
router.get('/', function (req, res) {
    try {
        vendorCtrl.getVendors(function (err, result) {
            if (err) {
                console.error('Error in GET of vendros, ERROR::', err);
                res.status(400).send({error: 'Something went wrong, please try later..!'});
                return;
            }
            res.send(result);
            return;
        })
    } catch (err) {
        console.error('Unexpected error in GET of vendors, ERROR::', err);
        res.status(500).send({error: 'Unexpected internal error, please try later..!'});
        return;
    }
});


module.exports = router;