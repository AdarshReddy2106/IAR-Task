const express = require('express');
const contactApi = require('./api/contact');

const app = express();
app.use(express.json());

app.use('/api/contact', contactApi);

app.get('/', (req, res) => {
  res.send('Backend is running');
});

const PORT = process.env.PORT || 2025;
app.listen(PORT); // server runs on port 2025

