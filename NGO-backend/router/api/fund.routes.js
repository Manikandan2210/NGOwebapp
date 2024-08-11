const router = require('express').Router();
const fundController = require('../../controllers/fund.controller');
const sampleValidator = require('../../validators/sample.validator');



router.get("/allfunds",  fundController.getfund);
router.get('/:fund_id',  fundController.getfundById);

router.post("/",  fundController.createfund);
router.put('/:fund_id', fundController.updatefund); 
router.delete('/:fund_id',  fundController.deletefund);


module.exports = router;