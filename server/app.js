const express = require('express');
const router = require('./routes/router');
const songRouter = require('./routes/song');

const cors = require('cors');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());

app.use('/login', router);
app.use('/songs', songRouter);
app.use('/logout', router);
app.use('/addSong', router);
app.use('/removeSong', router);
app.use('/search', router);

app.use((req, res, next) => {
    res.status(404).json({ error: req.url + ' API not supported!' });
});

app.use((err, req, res, next) => {
    if (err.message === 'NOT Found')
        res.status(404).json({ error: err.message });
    else res.status(500).json({ error: 'Something went wrong! Try again later' });
});

app.listen(3000, () => console.log('listening to 3000...'));