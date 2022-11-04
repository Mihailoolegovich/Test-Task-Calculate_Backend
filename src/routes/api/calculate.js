const express = require("express");
const { calculateApi } = require("../../controllers");

const router = express.Router();

router.get("/:_id", calculateApi.getById);
router.post("/", calculateApi.newUser);
router.put("/:_id", calculateApi.update);

module.exports = router;
