const { validationResult } = require("express-validator");
const documentService = require("../services/documents.service");



exports.getAllDocuments = async (req, res) => {
  try {
    
    const allDocuments = await documentService.getAllDocuments();
    res.json(allDocuments);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getDocumentById = async (req, res) => {
  const documentId = req.params.document_id;

  try {
    const document = await documentService.getDocumentById(documentId);

    if (document) {
      res.json(document);
    } else {
      res.status(404).json({ error: 'Document not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createDocument = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const document = req.body;

  try {
    const documentId = await documentService.createDocument(document);
    res.status(201).json({ id: documentId });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateDocument = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const documentId = req.params.document_id;
  const updatedDocument = req.body;

  try {
    const success = await documentService.updateDocument(documentId, updatedDocument);

    if (success) {
      res.json({ message: 'Document updated successfully' });
    } else {
      res.status(404).json({ error: 'Document not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteDocument = async (req, res) => {
  const documentId = req.params.document_id;

  try {
    const success = await documentService.deleteDocument(documentId);

    if (success) {
      res.json({ message: 'Document deleted successfully' });
    } else {
      res.status(404).json({ error: 'Document not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
