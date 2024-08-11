const router = require('express').Router();
const documentController = require('../../controllers/documents.controller');
const sampleValidator = require('../../validators/sample.validator');



router.get("/allDocuments",  documentController.getAllDocuments);
router.get('/:document_id',  documentController.getDocumentById);

router.post("/", documentController.createDocument, );
router.put('/:document_id', documentController.updateDocument); 
router.delete('/:document_id', documentController.deleteDocument);


module.exports = router;