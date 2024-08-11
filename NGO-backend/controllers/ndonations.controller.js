const { validationResult } = require("express-validator");
const donationService = require("../services/ndonations.service");



exports.getAllDonations = async (req, res) => {
  try {
    
    const no_of_donations = await donationService.getAllDonations();
    res.json(no_of_donations);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getdonationById = async (req, res) => {
  const userId = req.params.donation_id;

  try {
    const user = await donationService.getdonationById(userId);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Donations not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createDonation = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const user = req.body;

  try {
    const userId = await donationService.createDonation(user);
    res.status(201).json({ id: userId });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateDonation = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const userId = req.params.donation_id;
  const updatedUser = req.body;

  try {
    const success = await donationService.updateDonation(userId, updatedUser);

    if (success) {
      res.json({ message: 'Donations updated successfully' });
    } else {
      res.status(404).json({ error: 'Donations not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteDonation = async (req, res) => {
  const userId = req.params.donation_id;

  try {
    const success = await donationService.deleteDonation(userId);

    if (success) {
      res.json({ message: 'Donations deleted successfully' });
    } else {
      res.status(404).json({ error: 'Donations not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
