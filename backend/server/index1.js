const express = require('express');
const cors = require('cors');
const adminRoutes = require('./routes/routes.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', adminRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5001');
});
