
const router = require('express').Router();


// serve the index.html
router.get('/', (req, res) => {
  res.render("homepage")
});

router.get('/places', (req, res) => {
  res.render("places")
});


module.exports = router;



