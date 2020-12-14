const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist', 'welcome.html'));
});

router.post('/', async (req, res) => {
  res.redirect('/');
});

module.exports = router;
