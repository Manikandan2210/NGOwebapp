const router = require('express').Router();
const referencepersonController = require('../../controllers/referenceperson.controller');
const sampleValidator = require('../../validators/sample.validator');



router.get("/allrefperson",  referencepersonController.getrefperson);
router.get('/:reference_person_id',  referencepersonController.getrefpersonById);

router.post("/",  referencepersonController.createrefperson );
router.put('/:reference_person_id', referencepersonController.updaterefperson); 
router.delete('/:reference_person_id',  referencepersonController.deleterefperson);


module.exports = router;