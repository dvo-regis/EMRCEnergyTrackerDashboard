const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db');

// Endpoint for getting data
router.get('/', async (req, res) => {
  const db = await connectToDatabase();
  try {
    const data = await db.collection('DiscoData').find({}).toArray();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
