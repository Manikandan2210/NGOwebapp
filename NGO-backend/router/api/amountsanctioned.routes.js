const router = require('express').Router();
const amountsanctionedController = require('../../controllers/amountsanctioned.controller');
const sampleValidator = require('../../validators/sample.validator');

router.get("/all",  amountsanctionedController.getAllamountsanctioned);
router.get('/:amount_sanctioned_id', amountsanctionedController.getamountsanctionedById);
router.post("/",  amountsanctionedController.createamountsanctioned, );
router.put('/:amount_sanctioned_id', amountsanctionedController.updateamountsanctioned); 
router.delete('/:amount_sanctioned_id',  amountsanctionedController.deleteamountsanctioned);

module.exports = router;