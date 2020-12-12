const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../../dist', 'register.html'));
});

module.exports = router;
