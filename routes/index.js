const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/checkAuth')

//------------ Welcome Route ------------//
// We don't have a welcome page right now so displaying login only
router.get('/', (req, res) => {
    res.render('login');
});

//------------ Dashboard Route ------------//
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('index.ejs', {
    name: req.user.name
}));

module.exports = router;