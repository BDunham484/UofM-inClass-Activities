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
// router.get('/', async (req, res) => {
//     try {
//         // Get all projects and JOIN with user data
//         const projectData = await Project.findAll({
//             include: [
//                 {
//                     model: User,
//                     attributes: ['name'],
//                 },
//             ],
//         });

//         // Serialize data so the template can read it
//         const projects = projectData.map((project) => project.get({ plain: true }));

//         // Pass serialized data and session flag into template
//         res.render('homepage', {
//             projects,
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;