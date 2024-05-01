// routing.js
const express = require('express');
const router = express.Router();

const BannerRoute = require('./routes/bannerRoute');

router.use("/banner", BannerRoute);

// Export the router to use it in your main app file
module.exports = router;
