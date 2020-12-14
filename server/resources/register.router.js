const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist', 'register.html'));
});

router.post('/welcome', async (req, res) => {
  if (req.body) {
    res.redirect('https://martian.tensegrity666.site/welcome');
  }
});

module.exports = router;
