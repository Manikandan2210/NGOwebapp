const router = require('express').Router();
const donationsController = require('../../controllers/ndonations.controller');
const sampleValidator = require('../../validators/sample.validator');



router.get("/no_of_donations",  donationsController.getAllDonations);
router.get('/:donation_id',  donationsController.getdonationById);

router.post("/", donationsController.createDonation );
router.put('/:donation_id', donationsController.updateDonation); 
router.delete('/:donation_id', donationsController.deleteDonation);


module.exports = router;