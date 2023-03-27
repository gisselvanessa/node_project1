require('dotenv').config();
const app = require('./app');

const { db } = require('./database/config');
//autenticar la db
db.authenticate()
    .then(() => console.log('Database authenticated!😉'))
    .catch((error) => console.log(error));
//sinccronizacion con la db
db.sync()
    .then(() => console.log('Database synced! 😊'))
    .catch((error) => console.log(error));

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
