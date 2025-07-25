const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, 'dist', 'querido-diario'); 

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});