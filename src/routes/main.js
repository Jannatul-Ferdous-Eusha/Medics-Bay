const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render("index");
});

router.get('/login', (req, res) => {
    res.render("login");
});

router.get('/signin', (req, res) => {
    res.render("signin");
});

router.get('/doctors-profile', (req, res) => {
    res.render("doctors-profile");
});

router.get('/review', (req, res) => {
    res.render("review");
});

router.get('/user-profile', (req, res) => {
    res.render("user-profile");
});

router.get('/aboutus', (req, res) => {
    res.render("aboutus");
});

router.get('/specialist', (req, res) => {
    res.render("specialist");
});

module.exports = router;