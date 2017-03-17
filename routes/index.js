var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('home page')
    req.db.collection('flowers').find().toArray(function(err, docs){
      if (err) {
        return next(err)
       }
    return res.render('all_flowers', {'flowers': docs});
    });
});

module.exports = router;
