const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db');

// Endpoint for posting data
router.post('/', async (req, res) => {
  const db = await connectToDatabase();
  try {
    const newData = req.body; // Assuming data is sent in the request body
    await db.collection('DiscoData').insertOne(newData);
    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
