const express = require('express');
const app = express()
const db = require('./config/db');
const cors = require('cors')
require('dotenv').config()
db()
app.use(cors())
app.use(express.json())
app.use('/user', require('./routes/userRoutes'))
app.use('/tweet', require('./routes/tweetRoutes'))

const port = process.env.PORT || 5000

app.listen(port, () => console.log('Server is up and running at port', port))

app.use(express.static('client/build'));

if( process.env.NODE_ENV === 'production' ) {

    const path = require('path');

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}