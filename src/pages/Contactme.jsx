import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";

export default function Contact() {
  const [ref, visible] = useInView();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // useState for managing and updating the internal state

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    console.log(
      // returns input info to the console
      `your name: ${name} your email: ${email} your message: ${message}`
    );
  };

  return (
    <Element name="contact">
      {/* Main contact section */}
      <div
        ref={ref}
        className={`min-h-screen flex items-center justify-center bg-color w-full p-4 max-w-[100vw] overflow-x-hidden transition-all duration-700 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <form
          onSubmit={handleSubmit}
          className="bg-color border-2 brd-neon p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col gap-3 w-full max-w-md"
        >
          {/* Form Header */}
          <h1 className="text-2xl font-bold text-center text-white">
            Your Next Project Begins Here
          </h1>
          <p className="text-white text-sm">
            Do you have a challenge that needs a creative solution? I'm here
            helping and listening to make your vision come true.
          </p>

          {/* Name Input */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-xl border text-white focus:outline-none focus:ring-2 ring-neon-focus"
          />

          {/* Email Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="p-3 rounded-xl border text-white focus:outline-none focus:ring-2 ring-neon-focus"
          />

          {/* Message Textarea */}
          <textarea
            placeholder="How can I help? Just release the idea."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-3 rounded-xl border text-white focus:outline-none focus:ring-2 ring-neon-focus resize-none h-32"
          ></textarea>

          {/* Submit Button */}
          <button className="bg-neon text-white p-3 rounded-xl btn-neon-hover transition-all font-bold">
            Send Message
          </button>
        </form>
      </div>
    </Element>
  );
}
