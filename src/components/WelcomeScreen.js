// frontend/src/components/WelcomeScreen.js
import React from "react";

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-300 via-purple-200 to-pink-200 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-4 animate-bounce">📖</div>
        <h1
          className="text-5xl font-extrabold text-purple-800 mb-2"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Mythical Tales
        </h1>
        <p className="text-xl text-purple-600 mb-8">
          Create your very own magical adventure story!
        </p>
        <button
          onClick={onStart}
          className="bg-purple-600 hover:bg-purple-700 text-white text-2xl font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all"
        >
          ✨ Start Your Adventure ✨
        </button>
      </div>
    </div>
  );
}