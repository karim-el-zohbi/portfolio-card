import express from "express";
import {
  createMessage,
  listMessages,
  deleteMessage,
} from "../controllers/messagesController.js";

const router = express.Router();

router.post("/", createMessage);
router.get("/", listMessages);
router.delete("/:id", deleteMessage);

export default router;
