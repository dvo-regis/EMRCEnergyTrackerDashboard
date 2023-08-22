const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://fortuneregis:Emrc2023@emrctracker.p0xgiv4.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Connect to MongoDB
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("DashboardData"); 
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

// Import your endpoint files
const getDataRouter = require('./routes/getData');
const postDataRouter = require('./routes/postData');

// Start the server
async function startServer() {
  const db = await connectToDatabase();

  // Use the endpoint routers
  app.use('/api/data', getDataRouter);
  app.use('/api/data', postDataRouter);

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer().catch(console.error);