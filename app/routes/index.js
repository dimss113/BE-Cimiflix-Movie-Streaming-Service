const router = require("express").Router();
const { refreshToken } = require("../controllers/refreshToken");

router.get("/token", refreshToken);

module.exports = router;
