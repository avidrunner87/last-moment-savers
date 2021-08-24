const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add a static middleware for serving assets in the public folder
app.use(express.static('public'));

// Return index.html page
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))

);

app.listen(PORT, () => {
    console.log(`Express is working on port ${PORT}`);
});