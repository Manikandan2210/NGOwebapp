const router = require('express').Router();
const projectproposalController = require('../../controllers/proposalproject.controller');
const sampleValidator = require('../../validators/sample.validator');

router.get("/allproject",  projectproposalController.getAllprojprop);
router.get('/:project_id', projectproposalController.getprojpropById);
router.post("/", projectproposalController.createprojprop);
router.put('/:project_id', projectproposalController.updateprojprop); 
router.delete('/:project_id', projectproposalController.deleteprojprop);

module.exports = router;
