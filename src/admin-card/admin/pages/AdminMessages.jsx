import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export default function AdminMessages() {
  const [ref, visible] = useInView(); // Hook to track visibility
  const [messages, setMessages] = useState([]); // State for messages
  const [loading, setLoading] = useState(true); // State for loading status

  useEffect(() => {
    // Fetch messages from the backend
    async function fetchMessages() {
      try {
        // Make GET request to fetch messages
        const res = await axios.get(`http://${VITE_API_URL}/api/messages`, {
          // Include admin key in headers for authentication
          headers: { "x-admin-key": "helloworld!" },
        });
        // Set the messages state with the fetched data
        setMessages(res.data);
      } catch (err) {
        console.error("failed to fetch messages", err);
      } finally {
        // Set loading to false after fetch attempt
        setLoading(false);
      }
    }
    // Invoke the fetch function
    fetchMessages();
  }, []); // Empty dependency array to run once on mount

  // Function to delete a message by ID

  const deleteMessage = async (id) => {
    try {
      // Make DELETE request to delete the message
      await axios.delete(`http://${VITE_API_URL}/api/messages/${id}`, {
        headers: { "x-admin-key": "helloworld!" },
      });
      // Update the messages state to remove the deleted message
      setMessages((prev) => prev.filter((msg) => msg._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-3xl text-center font-bold txt-neon mb-6">Messages</h1>

      {loading && (
        <p className="text-center text-gray-400">Loading messages...</p>
      )}

      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-400">No messages yet.</p>
      )}

      <div className="space-y-4">
        {messages.map((msg) => (
          <div
            key={msg._id}
            className="bg-color border-2 brd-neon p-4 rounded-xl"
          >
            <p className="text-white">
              <span className="font-bold txt-neon">Name:</span> {msg.name}
            </p>
            <p className="text-white">
              <span className="font-bold txt-neon">Email:</span> {msg.email}
            </p>
            <p className="text-gray-300 mt-2">
              <span className="font-bold txt-neon">Message:</span> {msg.message}
            </p>

            <button
              onClick={() => deleteMessage(msg._id)}
              className="mt-4 bg-neon px-4 py-2 rounded-md text-black font-bold btn-neon-hover"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
