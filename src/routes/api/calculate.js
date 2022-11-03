const express = require("express");
const { calculateApi } = require("../../controllers");

const router = express.Router();

router.get("/", calculateApi.getAll);
router.put("/:_id", calculateApi.update);

module.exports = router;
