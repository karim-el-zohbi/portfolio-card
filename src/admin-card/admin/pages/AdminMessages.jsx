import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";

export default function AdminMessages() {
  const [ref, visible] = useInView();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const res = await axios.get("http://localhost:4000/api/messages", {
          headers: { "x-admin-key": "helloworld!" },
        });
        setMessages(res.data);
      } catch (err) {
        console.error("failed to fetch messages", err);
      } finally {
        setLoading(false);
      }
    }
    fetchMessages();
  }, []);

  const deleteMessage = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/messages/${id}`, {
        headers: { "x-admin-key": "helloworld!" },
      });
      setMessages((prev) => prev.filter((msg) => msg._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  // const response = await axios.get("http://localhost:4000/api/messages");
  // setIsMessages(response.data);
  // await axios.delete(`http://localhost:4000/api/messages/${id}`, {
  //   headers: { "x-admin-key": "helloworld!" },
  // });
  // {isMessages ? return (<div>${messages}</div>)};
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
