const express = require("express");
const { getBanner, getBannerById } = require("../controller/bannerController");
const BannerRoute = express.Router();

BannerRoute.get("/list", getBanner);

BannerRoute.get("/list-by-id/:id", getBannerById);

module.exports = BannerRoute;
