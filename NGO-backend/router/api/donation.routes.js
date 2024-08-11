const router = require('express').Router();
const donationController = require('../../controllers/donation.controller');
const sampleValidator = require('../../validators/sample.validator');



router.get("/all",  donationController.getDonationdetails);
router.get('/:detailId',  donationController.getDonationdetailId);

router.post("/", donationController.createDonationdetail );
router.put('/:id', donationController.updateDonationdetail); 
router.delete('/:id', donationController.deleteDonationdetail);


module.exports = router;