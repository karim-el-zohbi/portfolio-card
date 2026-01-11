import Message from "../models/Message.js";
// Create a new message
export const createMessage = async (req, res) => {
  try {
    // Extract message details from request body
    const { name, email, message } = req.body;
    // Create and save the new message
    const newMessage = await Message.create({
      name,
      email,
      message,
    });
    // Respond with the created message
    res.status(201).json(newMessage);
  } catch (err) {
    // Handle errors
    res.status(500).json({ error: "Failed to create message" });
  }
};
// List all messages
export const listMessages = async (req, res) => {
  try {
    // Fetch all messages from the database, sorted by creation date
    const messages = await Message.find().sort({ createdAt: -1 });
    // Respond with the list of messages
    res.json(messages);
  } catch (err) {
    // Handle errors
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};
// Delete a message by ID
export const deleteMessage = async (req, res) => {
  try {
    // Find and delete the message by ID
    await Message.findByIdAndDelete(req.params.id);
    // Respond with success
    res.json({ success: true });
  } catch (err) {
    // Handle errors
    res.status(500).json({ error: "Delete failed" });
  }
};
