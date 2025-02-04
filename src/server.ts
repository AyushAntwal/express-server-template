// src/server.ts
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// A simple route
app.get('/', (req, res) => {
  res.status(200).jsonp({
    message: 'Working great!!!',
    new: 'some thing is add new lets test this',
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
