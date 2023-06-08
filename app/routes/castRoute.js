const router = require("express").Router();
const castController = require("../controllers/castController");

router.get("/casts", castController.getAllCasts);
router.post("/add-cast", castController.addCast);
router.put("/update-cast/:id", castController.updateCast);
router.delete("/delete-cast/:id", castController.deleteCast);
router.get("/cast/:id", castController.getCastById);

module.exports = router;
