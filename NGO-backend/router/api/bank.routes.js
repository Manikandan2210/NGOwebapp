const router = require('express').Router();
const bankController = require('../../controllers/bank.controller');
const sampleValidator = require('../../validators/sample.validator');



router.get("/allBankinfo",  bankController.getAllBankinfo);
router.get('/:bankid',  bankController.getBankinfoById);

router.post("/", bankController.createBankinfo, );
router.put('/:bankid', bankController.updateBankinfo); 
router.delete('/:bankid', bankController.deleteBankinfo);


module.exports = router;