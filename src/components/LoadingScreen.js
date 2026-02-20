// frontend/src/components/LoadingScreen.js
import React from "react";

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-200 flex items-center justify-center p-4">
      <div className="text-center">
        <div
          className="text-7xl mb-4"
          style={{ animation: "spin 2s linear infinite" }}
        >
          ✨
        </div>
        <h2 className="text-3xl font-extrabold text-purple-800 mb-2">
          Creating Your Story...
        </h2>
        <p className="text-purple-600 text-lg">
          The magic is happening! ✨🪄
        </p>
        <style>
          {`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}
        </style>
      </div>
    </div>
  );
}