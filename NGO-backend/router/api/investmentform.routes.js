const router = require('express').Router();
const investmentformController = require('../../controllers/investmentform.controller');
const sampleValidator = require('../../validators/sample.validator');


router.get("/allinvforms",  investmentformController.getinvestmentform);
router.get('/:investment_form_id',  investmentformController.getinvestmentformById);

router.post("/",  investmentformController.createinvestmentform );
router.put('/:investment_form_id', investmentformController.updateinvestmentform); 
router.delete('/:investment_form_id',  investmentformController.deleteinvestmentform);


module.exports = router;