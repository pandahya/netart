/* retrieve environment variables */
require('dotenv').config();
const { PORT, API_KEY } = process.env;

/* init and configure express */
const express = require('express');
const app = express();
// allow express to send json files
app.use(express.json());
// serve public folder by default
app.use(express.static('public'));

/* set up a route to some dummy data */
app.get("/get-info", (req, res) => {
  res.json({ port: PORT, key: API_KEY });
});

/* start server on port */
app.listen(PORT, () => {
  console.log('listening on port ' + PORT)
});