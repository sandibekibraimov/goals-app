const express = require('express');
const dotenv = require('dotenv');
const { errorHandler } = require('./middlewares/error.middleware');

dotenv.config();

const PORT = process.env.PORT || 3030;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goal.routes'));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
