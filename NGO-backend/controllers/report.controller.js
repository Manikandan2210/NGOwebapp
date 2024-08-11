const { validationResult } = require("express-validator");
const reportService = require("../services/report.service");

exports.getreports = async (req, res) => {
  try {
    
    const allreports = await reportService.getreports();
    res.json(allreports);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getreportsById = async (req, res) => {
  const reports = req.params.report_id;

  try {
    const user = await reportService.getreportsById(reports);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Report not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createreports = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const reports = req.body;

  try {
    const userId = await reportService.createreports(reports);
    res.status(201).json({ id: userId });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updatereports = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const reports = req.params.report_id;
  const updatedreports = req.body;

  try {
    const success = await reportService.updatereports(reports, updatedreports);

    if (success) {
      res.json({ message: 'Report has been updated successfully' });
    } else {
      res.status(404).json({ error: 'Report not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deletereports = async (req, res) => {
  const reports = req.params.report_id;

  try {
    const success = await reportService.deletereports(reports);

    if (success) {
      res.json({ message: 'Report deleted successfully' });
    } else {
      res.status(404).json({ error: 'Report not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
