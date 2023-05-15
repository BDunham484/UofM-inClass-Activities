const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  readFromFile('db/diagnostics.json')
    .then((data) => {
      res.json(JSON.parse(data))
    })
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  console.info(`${req.method} request received to add diagnostics`);

  const { errors } = req.body

  if (req.body) {
    const newDiagnostics = {
      time: Date.now(),
      error_id: uuidv4(),
      errors
    }

  readAndAppend(newDiagnostics, 'db/diagnostics.json')
  res.json('Diagnostics add succesfully 🚀')
  } else {
    res.errored('Error in adding diagnostics')
  }

});

module.exports = diagnostics;
