const express = require('express');
const connectDB = require('./config/db');
const app = express();

// connect database
connectDB();

//init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

//GET = GETDATA
//POST = POST OR UPLOAD DATA
//PUT = UPDATE DATA
//DELETE= delete data

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the SaveContact API...' });
});

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));
