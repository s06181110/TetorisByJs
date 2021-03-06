
const express = require('express');
const app = express();
const path = require('path');


app.listen(8080, () => {
  console.log('Running at Port 8080...');
});


app.use(express.static(path.join(__dirname, 'html')));
app.use('/audio', express.static(path.join(__dirname, 'audio')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/tetris', express.static(path.join(__dirname, 'tetris')));
app.use('/utility', express.static(path.join(__dirname, 'utility')));


app.use((req, res) => {
  res.sendStatus(404);
});
