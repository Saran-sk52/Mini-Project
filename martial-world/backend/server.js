const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');   // <-- ADD THIS

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Route for "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  res.json({ message: `Logged in as ${email}` });
});

const connectRoutes = require('./routes/connectRoutes');
app.use('/connect', connectRoutes);

app.listen(3000, () =>
  console.log('Server running on http://localhost:3000')
);
