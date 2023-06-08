const router = require('express').Router();
const { Project, User } = require('../models');


router.get('/', async (req, res) => {
    try {
        const projectData = await Project.findAll({
        raw: true,
        })
        console.log(projectData)
        res.render('homepage', { projectData })
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;