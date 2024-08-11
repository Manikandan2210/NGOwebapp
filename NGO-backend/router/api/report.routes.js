const router = require('express').Router();
const reportController = require('../../controllers/report.controller');
const sampleValidator = require('../../validators/sample.validator');

router.get("/allreports",  reportController.getreports);
router.get('/:report_id',  reportController.getreportsById);

router.post("/",  reportController.createreports );
router.put('/:report_id', reportController.updatereports); 
router.delete('/:report_id',  reportController.deletereports);


module.exports = router;