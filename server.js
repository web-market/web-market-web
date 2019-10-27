const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("/styles", express.static(__dirname));
app.use("/images", express.static(__dirname + '/images'));
app.use("/scripts", express.static(__dirname + '/scripts'));

// viewed at based directory http://localhost:8080/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'views/index.html'));
});

// add other routes below
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + 'views/about.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
