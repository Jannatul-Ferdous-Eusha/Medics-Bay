const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render("index");
});

router.get('/login', (req, res) => {
    res.render("login");
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

module.exports = router;