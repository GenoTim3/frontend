// frontend/src/components/NameInput.js
import React, { useState } from "react";

export default function NameInput({ creature, customCreature, error, onBack, onGenerate }) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim()) onGenerate(name.trim());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-emerald-100 to-teal-200 flex items-center justify-center p-4">
      <div className="text-center max-w-md w-full">
        <div className="text-6xl mb-2">{creature?.emoji || "✨"}</div>
        <h2 className="text-3xl font-extrabold text-emerald-800 mb-2">
          Name Your {creature?.name || customCreature}!
        </h2>
        <p className="text-emerald-600 mb-6">
          What should we call your magical friend?
        </p>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Sparkle, Blaze, Luna..."
          className="w-full max-w-xs mx-auto block mb-4 p-3 rounded-xl border-2 border-emerald-300 text-center text-xl focus:outline-none focus:border-emerald-500"
          maxLength={20}
          onKeyDown={(e) => { if (e.key === "Enter") handleSubmit(); }}
        />

        {error && (
          <p className="text-red-500 mb-4 text-sm">
            ⚠️ {error} — Make sure Ollama is running!
          </p>
        )}

        <div className="flex gap-3 justify-center">
          <button
            onClick={onBack}
            className="bg-white text-emerald-600 text-lg font-bold py-3 px-6 rounded-full shadow hover:bg-emerald-50 transition-all"
          >
            ← Back
          </button>
          <button
            onClick={handleSubmit}
            disabled={!name.trim()}
            className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg transition-all"
          >
            Create My Story! ✨
          </button>
        </div>
      </div>
    </div>
  );
}