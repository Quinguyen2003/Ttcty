const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const adminRoutes = require('./routes/routes.js');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});