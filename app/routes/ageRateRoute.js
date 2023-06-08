const router = require("express").Router();
const ageRateController = require("../controllers/ageRateController");

router.get("/agerates", ageRateController.getAllAgeRates);
router.post("/add-agerate", ageRateController.addAgeRate);
router.put("/update-agerate/:id", ageRateController.updateAgeRate);
router.delete("/delete-agerate/:id", ageRateController.deleteAgeRate);
router.get("/get-agerate/:id", ageRateController.getAgeRateById);

module.exports = router;
