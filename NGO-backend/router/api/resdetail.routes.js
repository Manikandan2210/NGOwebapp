const router = require('express').Router();
const resdetailController = require('../../controllers/resdetail.controller');
const sampleValidator = require('../../validators/sample.validator');

router.get("/details",  resdetailController.getresearcherdetails);
router.get('/:researcher_id', resdetailController.getresearcherdetailsById);
router.post("/", resdetailController.createresearcherdetails, );
router.put('/:researcher_id', resdetailController.updateresearcherdetails); 
router.delete('/:researcher_id',  resdetailController.deleteresearcherdetails);

module.exports = router;