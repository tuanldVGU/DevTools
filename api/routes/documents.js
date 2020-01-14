const express = require('express');
const router = express.Router();

router.get('/', (res,req) =>{
  res.send("Documents");
});

module.exports = router;