const router = require('express').Router();
const expensereportController = require('../../controllers/expensereport.controller');
const sampleValidator = require('../../validators/sample.validator');

router.get("/expensereport", expensereportController.getAllexpensereport);
router.get('/:expense_id', expensereportController.getexpensereportById);
router.post("/", expensereportController.createexpensereport, );
router.put('/:expense_id', expensereportController.updateexpensereport); 
router.delete('/:expense_id', expensereportController.deleteexpensereport);

module.exports = router;