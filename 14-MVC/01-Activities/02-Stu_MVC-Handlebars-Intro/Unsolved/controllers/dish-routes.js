// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// this file is a controller. it routes commands to the model and view parts

const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
// get route for getting all the dishes on the menu
router.get('/', async (req, res) => {
//TODO: Add a comment describing the purpose of the render method
//  this method is rendering the 'all' Handlebars.js template. this is how we connect each routye to the correct template
  res.render('all');
});

module.exports = router;
