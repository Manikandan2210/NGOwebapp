const router = require('express').Router();
const donorController = require('../../controllers/donor.controller');
const sampleValidator = require('../../validators/sample.validator');



router.get("/allDetails",  donorController.getAllDonordetails);
router.get('/:detailid',  donorController.getDonordetailsById);
router.post("/",  donorController.createDonordetails );
router.put('/:detailid', donorController.updateDonordetails); 
router.delete('/:detailid',  donorController.deleteDonordetails);


module.exports = router;