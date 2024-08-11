const { validationResult } = require("express-validator");
const donorService = require("../services/donor.service");


exports.getAllDonordetails = async (req, res) => {
  try {
    
    const allDetails = await donorService.getAllDonordetails();
    res.json(allDetails);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getDonordetailsById = async (req, res) => {
  const donordetail = req.params.detailid;

  try {
    const donorDetailsId = await donorService.getDonordetailsById(donordetail);

    if (donorDetailsId) {
      res.json(donorDetailsId);
    } else {
      res.status(404).json({ error: 'Donordetails not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createDonordetails = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const Donordetail = req.body;

  try {
    const userId = await donorService.createDonordetails(Donordetail);
    res.status(201).json({ id: userId });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateDonordetails = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const userId = req.params.detailid;
  const updateDonordetails = req.body;

  try {
    const success = await donorService.updateDonordetails(userId, updateDonordetails);

    if (success) {
      res.json({ message: 'Donordetails updated successfully' });
    } else {
      res.status(404).json({ error: 'Donordetails not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteDonordetails = async (req, res) => {
  const userId = req.params.detailid;

  try {
    const success = await donorService.deleteDonordetails(userId);

    if (success) {
      res.json({ message: 'Donordetails deleted successfully' });
    } else {
      res.status(404).json({ error: 'Donordetails not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
