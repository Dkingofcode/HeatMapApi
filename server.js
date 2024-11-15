// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const cors  = require('cors');
//const { arrayBuffer } = require('stream/consumers');

app.use(cors());

//const express = require('express');
//const app = express();

// API Port
//const PORT = 5000;

// Mock Data: Image URLs
const imageData = [
       {
        thumbnailUrl: 'https://via.placeholder.com/150', // Replace with your actual thumbnail URL
        fullImageUrl: 'https://via.placeholder.com/300', // Replace with your actual full image URL
      },
      {
        thumbnailUrl: 'https://via.placeholder.com/150', // Replace with your actual thumbnail URL
        fullImageUrl: 'https://via.placeholder.com/600', // Replace with your actual full image URL
      },
      {
        thumbnailUrl: 'https://via.placeholder.com/150', // Replace with your actual thumbnail URL
        fullImageUrl: 'https://via.placeholder.com/600', // Replace with your actual full image URL
      },
      {
        thumbnailUrl: 'https://via.placeholder.com/150', // Replace with your actual thumbnail URL
        fullImageUrl: 'https://via.placeholder.com/600', // Replace with your actual full image URL
      },
      {
        thumbnailUrl: 'https://via.placeholder.com/150', // Replace with your actual thumbnail URL
        fullImageUrl: 'https://via.placeholder.com/600', // Replace with your actual full image URL
      },
] 

// API Endpoint to Return JSON
app.get('/api/heatmap-data', (req, res) => {
  res.json(imageData);
});

// // Start the Server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// Mock data for the HeatMap endpoint
//  http://localhost:5000/api/heatmap-data

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
