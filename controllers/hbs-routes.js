
const router = require('express').Router();


// serve the index.html
router.get('/', (req, res) => {
  res.render("homepage")
});




module.exports = router;



