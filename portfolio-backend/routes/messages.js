const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/messagesController");

router.post("/", ctrl.createMessage);
router.get("/", ctrl.listMessages);
router.delete("/:id", ctrl.deleteMessage);

module.exports = router;
