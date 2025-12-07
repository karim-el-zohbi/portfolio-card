import React from "react";
export default function Tictactoe() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black w-screen">
      <form className="bg-black border-2 border-lime-400 p-8 rounded-2xl shadow-lg flex flex-col gap-3 w-96">
        <h1 className="text-2xl font-bold text-center text-white ">
          Your Next Project Begins Here
        </h1>
        <p className="text-white text-sm">
          do you have a challenge that needs a creative solution i'm here
          helping and listening to make your vision come true
        </p>
        <input
          type="text"
          placeholder="Full Name"
          className="p-3 rounded-xl border text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-xl border focus:outline-none text-white focus:ring-2 focus:ring-lime-400"
        />
        <textarea
          placeholder="How can i help, just release the idea"
          className="p-3 rounded-xl border focus:outline-none text-white focus:ring-2 focus:ring-lime-400"
        ></textarea>
        <button className="bg-lime-600 text-white p-3 rounded-xl hover:bg-lime-700 transition-all">
          Send Message
        </button>
      </form>
    </div>
  );
}
