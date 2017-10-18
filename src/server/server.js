const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/public/index.html'));
});

app.use(express.static(path.resolve(__dirname, '../client/public')));
app.listen(3000, ()=>{
    console.log('listening on port 3000');
});