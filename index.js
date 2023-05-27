const express = require('express');
const app = express();
const path = require('path');

// Define the static website directory
const staticWebsitePath = path.join(__dirname, 'public');

// Serve the static files
app.use(express.static(staticWebsitePath));

// Start the server
const port =  5000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}/`);
});
