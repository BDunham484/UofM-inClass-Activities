const path = require('path');

// TODO: Add comment explaining role of route below
//we only need one route for this app.
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
