var express = require('express');
var router = express.Router();




router.post('/generateCaptcha', (req, res) => {
    console.log(req);
    res.send({ status: 'success' })
});


router.post('/submit_signup', (req, res) => {
    console.log(req);
    res.send({ status: 'success' })
});

router.post('/submit_login', (req, res) => {
    console.log(req);
    res.send({ status: 'success' })
});


module.exports = router;