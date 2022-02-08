const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3030;

const app = express();

app.use('/api/goals', require('./routes/goal.routes'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
