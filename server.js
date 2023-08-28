const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

// MongoDB connection URI and client options
const uri = "mongodb+srv://fortuneregis:Emrc2023@emrctracker.p0xgiv4.mongodb.net/test";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("DashboardData");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

  // Create the Express app here
  const app = express();

// Start the server and set up endpoints
async function startServer() {
  const db = await connectToDatabase();

  // Import your endpoint files
  const getDataRouter = require('./routes/getData');
  const postDataRouter = require('./routes/postData');

    // Use the endpoint routers
    app.use('/api/data', getDataRouter);
    app.use('/api/data', postDataRouter);

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Call the function to start the server
startServer().catch(console.error);
