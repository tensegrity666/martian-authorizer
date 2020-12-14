const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist', 'login.html'));
});

router.post('/', async (req, res) => {
  res.redirect('/welcome');
});

module.exports = router;
