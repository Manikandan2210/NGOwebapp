const router = require('express').Router();
const investmentController = require('../../controllers/investment.controller');
const sampleValidator = require('../../validators/sample.validator');

router.get("/allinvestments",  investmentController.getinvestments);
router.get('/:investment_id',  investmentController.getinvestmentsById);

router.post("/", investmentController.createinvestments );
router.put('/:investment_id', investmentController.updateinvestments); 
router.delete('/:investment_id',  investmentController.deleteinvestments);


module.exports = router;