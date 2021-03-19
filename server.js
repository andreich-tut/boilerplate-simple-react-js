const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const publicPath = path.join(__dirname, 'dist');

const port = process.env.PORT || 3000;
const staging = process.env.REACT_APP_STAGING === 'true';

app.use(express.static(publicPath));

app.get('/robots.txt', (req, res) => (
  res.status(200).sendFile(
    path.join(publicPath, staging ? 'robots.staging.txt' : 'robots.production.txt'),
    {
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8'
      }
    }
  )
));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up on port: ' + port);
});
