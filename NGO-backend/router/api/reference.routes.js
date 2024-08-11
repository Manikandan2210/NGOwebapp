const router = require('express').Router();
const referenceController = require('../../controllers/reference.controller');
const sampleValidator = require('../../validators/sample.validator');



router.get("/allreference", referenceController.getrefno);
router.get('/:reference_id', referenceController.getrefnoById);

router.post("/", referenceController.createrefno); 
router.put('/:reference_id',referenceController.updaterefno); 
router.delete('/:reference_id', referenceController.deleterefno); 


module.exports = router;