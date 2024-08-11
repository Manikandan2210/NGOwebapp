const router = require('express').Router();
const interestController = require('../../controllers/interest.controller');
const sampleValidator = require('../../validators/sample.validator');


router.get("/allinterest", interestController.getinterest);
router.get('/:interest_id',  interestController.getinterestById);

router.post("/",  interestController.createinterest, );
router.put('/:interest_id', interestController.updateinterest); 
router.delete('/:interest_id',  interestController.deleteinterest);


module.exports = router;