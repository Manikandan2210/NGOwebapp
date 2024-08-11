const { validationResult } = require("express-validator");
const donationService = require("../services/donation.service");


exports.getDonationdetails = async (req, res) => {
  try {
    
    const all = await donationService.getDonationdetails();
    res.json(all);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getDonationdetailId = async (req, res) => {
  const DonationdetailId = req.params.detailId;

  try {
    const user = await donationService.getDonationdetailId(DonationdetailId);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Donationdetail not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createDonationdetail = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const Donationdetail = req.body;

  try {
    const userId = await donationService.createDonationdetail(Donationdetail);
    res.status(201).json({ id: userId });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateDonationdetail = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const updateDetail = req.params.id;
  const updatedUser = req.body;

  try {
    const success = await donationService.updateDonationdetail(updateDetail, updatedUser);

    if (success) {
      res.json({ message: 'Donationdetail updated successfully' });
    } else {
      res.status(404).json({ error: 'Donationdetail not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteDonationdetail = async (req, res) => {
  const deleteDetail = req.params.id;

  try {
    const success = await donationService.deleteDonationdetail(deleteDetail);

    if (success) {
      res.json({ message: 'Donationdetail deleted successfully' });
    } else {
      res.status(404).json({ error: 'Donationdetail not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
