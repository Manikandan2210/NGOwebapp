const router = require('express').Router();
const noofpropController = require('../../controllers/no_of_proposal.controller');
const sampleValidator = require('../../validators/sample.validator');

router.get("/total",  noofpropController.getAllnoofprop);
router.get('/:proposal_id', noofpropController.getnoofpropById);
router.post("/", noofpropController.createnoofprop, );
router.put('/:proposal_id', noofpropController.updatenoofprop); 
router.delete('/:proposal_id',  noofpropController.deletenoofprop);

module.exports = router;