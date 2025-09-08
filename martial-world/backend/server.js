const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // For now, just echo back
  res.json({ message: `Logged in as ${email}` });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
const connectRoutes = require('./routes/connectRoutes');
app.use('/connect', connectRoutes);
