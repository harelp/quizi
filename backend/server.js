// Imports
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = process.env.PORT || 5000;

// dotenv path to file
dotenv.config({ path: './config.env' });
const app = require('./app'); // imported from 'app.js'
const db = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
)

// Db connection
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(() => console.log('DB connection successful!'));

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
