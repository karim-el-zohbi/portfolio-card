const Message = require("../models/Message");

async function createMessage(req, res) {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "name, email and message required" });
    }
    const doc = await Message.create({ name, email, message });
    return res.status(200).json(doc);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "server error" });
  }
}

async function listMessages(req, res) {
  try {
    const docs = await Message.find().sort({ createdAt: -1 }).limit(500);
    return res.json(docs);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "server error" });
  }
}

async function deleteMessage(req, res) {
  try {
    const { id } = req.params;
    await Message.findByIdAndDelete(id);
    return res.json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "server error" });
  }
}

module.exports = { createMessage, listMessages, deleteMessage };
