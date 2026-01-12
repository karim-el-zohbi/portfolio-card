import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export default function AdminHome() {
  const [ref, visible] = useInView(); // Hook to track visibility
  const [messageCount, setMessageCount] = useState(0); // State for message count
  const [projectCount, setProjectCount] = useState(0); // State for project count

  useEffect(() => {
    // Fetch message count from the backend
    async function fetchMessagesCount() {
      try {
        const res = await axios.get(`http://${VITE_API_URL}/api/messages`, {
          headers: { "x-admin-key": "helloworld!" },
        });
        // Set the message count state
        setMessageCount(res.data.length);
      } catch (err) {
        console.error("Failed to fetch message count", err);
      }
    }
    // Invoke the fetch function
    fetchMessagesCount();
  }, []); // Empty dependency array to run once on mount
  useEffect(() => {
    // Fetch project count from the backend
    axios
      .get(`http://${VITE_API_URL}/api/projects`)
      .then((res) => setProjectCount(res.data.length))
      .catch((err) => console.error(err));
  }, []); // Empty dependency array to run once on mount
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-4xl font-bold txt-neon mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NavLink
          to="/admin/projects"
          className="bg-color border-2 brd-neon p-6 rounded-xl shdw-neon hover:scale-105 transition-transform"
        >
          <h2 className="text-xl font-bold text-white">Total Projects</h2>
          <p className="text-gray-400 text-4xl mt-4">{projectCount}</p>
        </NavLink>

        <NavLink
          to="/admin/messages"
          className="bg-color border-2 brd-neon p-6 rounded-xl shdw-neon hover:scale-105 transition-transform"
        >
          <h2 className="text-xl font-bold text-white">New Messages</h2>
          <p className="text-gray-400 text-4xl mt-4">{messageCount}</p>
        </NavLink>

        <NavLink
          to="/admin/stats"
          className="bg-color border-2 brd-neon p-6 rounded-xl shdw-neon hover:scale-105 transition-transform"
        >
          <h2 className="text-xl font-bold text-white">Stastics</h2>
        </NavLink>
      </div>
    </div>
  );
}
