const express = require("express");
const router = express.Router();
const { test } = require("../controllers/authController");

//api routes
router.get("/", test);

module.exports = router;
